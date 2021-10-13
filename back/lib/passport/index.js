const passport = require('passport');
const local = require('./local.js');
module.exports = (pool) => {
    passport.serializeUser((user, done) => {
        console.log('serialize ' + user.userId);
        done(null, user.userId);
    });
    passport.deserializeUser((userId, done) => {
        console.log('deserialize ' + userId);
        let sql = 'SELECT uid as id, user_id as userId, user_pwd as userPwd, user_nm as nickname, studyTime as studySec FROM userdata_tb WHERE user_id=?';
        pool.query(sql, [userId],
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                done(null, rows[0]);
            });
    });
    local(pool);
}