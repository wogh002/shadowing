const mysql = require('mysql2');
const fs = require('fs');

const data = fs.readFileSync('./back/database.json');
const conf = JSON.parse(data);
const pool = mysql.createPool({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

module.exports = pool;