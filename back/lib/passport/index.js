const passport = require('passport');
const local = require('./local.js');

module.exports = (pool) => {
    passport.serializeUser(() =>{

    });
    passport.deserializeUser(()=>{

    });
    local(pool);
}