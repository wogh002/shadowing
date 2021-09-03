const passport = require('passport');
const { Strategy: LocalStrategy } = require("passport-local");
module.exports = (pool) => {
    console.log('start local');
    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password'
    }, (user_id, user_pwd, done) => {
        let sql = 'SELECT uid as id, user_id as userId, user_pwd as userPwd, user_nm as nickname FROM userdata_tb WHERE user_id=?';
        pool.query(sql, [user_id],
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                if (rows.length === 0) {
                    return done(null, false, { message: '존재하지 않는 사용자입니다.' });
                }
                let user = rows[0];
                if (user.userPwd !== user_pwd) {
                    return done(null, false, { message: '비밀번호가 틀립니다.' });
                }
                return done(null, user);
            });
    }));
}