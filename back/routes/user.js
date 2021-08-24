const express = require('express')
const router = express.Router();

module.exports = (pool) => {
    router.post('/join', (req, res, next) => {
        let sql = '';
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
}