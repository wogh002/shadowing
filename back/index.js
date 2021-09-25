const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const app = express();
const port = process.env.PORT || 5000;


const pool = require('./lib/db');
const passportConfig = require('./lib/passport');

passportConfig(pool);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(cookieParser('key'));
app.use(session({
  saveUninitialized: false,
	resave: false,
	secret: 'key',
}));
app.use(passport.initialize());
app.use(passport.session());


//라우팅 설정
var userRouter = require('./routes/user')(pool);
var videoRouter = require('./routes/video')(pool);
app.use('/user', userRouter);
app.use('/video', videoRouter);

// 에러 페이지 처리
app.use(function (req, res, next) {
    res.status(404).send('Sorry cannot find that!');
  });

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(port, () => console.log(`Listening on port ${port}`))