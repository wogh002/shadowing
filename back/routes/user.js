const express = require('express')
const passport = require('passport');
const router = express.Router();

module.exports = (pool) => {

    router.get('/', (req,res,next)=>{
        if(!req.user){
            return res.status(200).json(null);
        }
        console.log(req.user);
        let sql = 'SELECT uid as id, user_id as userId, user_pwd as userPwd, user_nm as nickname FROM userdata_tb WHERE user_id=?';
        pool.query(sql, [req.user.id],
            (err, rows, fields)=>{
                if(err){
                    console.log(err);
                    return next(err);
                }
                res.status(200).json(rows[0]);
            });
    });

    router.post('/join', (req, res, next) => {
        let sql = 'INSERT INTO userdata_tb VALUES (null,?,?,?,0)';
        let id = req.body.id;
        let password = req.body.password;
        let name = req.body.nickname;
        let params = [id, password, name];
        pool.query(sql, params,
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return next(arr);
                }
                console.log('Create account end: ' + results);
                res.send("계정 생성 완료");
            });
    });

    router.post('/checkId', (req, res, next) => {
        let sql = 'SELECT uid FROM userdata_tb WHERE user_id=?';
        let id = req.body.userId;
        pool.query(sql, [id],
            (err, results) => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                if (results.length !== 0) res.status(403).send('해당 아이디가 이미 DB에 있습니다.');
                else res.send("해당 아이디가 중복되지 않습니다.");
            });

    });

    router.post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            if (info) {
                console.log(info.message);
                return res.status(403).send(info.message);
            }
            return req.login(user, async (loginErr) => {
                if (loginErr) { return next(loginErr); }
                return res.json(user);
            });
        })(req, res, next);
    });

    router.post('/get', (req, res) => {
        req.logout();
        req.session.destroy();
        res.send('ok');
    })

    return router;
}