const express = require('express')
const router = express.Router();

module.exports = (pool) => {
    router.post('/join', (req, res, next) => {
        let sql = 'INSERT INTO userdata_tb VALUES (null,?,?,?,0)';
        let id = req.body.id;
        let password = req.body.password;
        let name = req.body.name;
        let params = [id, password, name];
        pool.query(sql, params,
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return next(arr);
                }
                console.log('Create account end: ' + results);
            });
    });

    router.post('/checkId', (req, res, next) => {
        let sql = 'SELECT uid FROM userdata_tb WHERE user_id=?';
        let id = req.body.userId;
        pool.query(sql, [id],
            (err, results) => {
                if(err){
                    console.log(err);
                    return next(err);
                }
                if(results.length !== 0){
                    res.send({check: true});
                }
                res.send({check: false});
            });

    });
}