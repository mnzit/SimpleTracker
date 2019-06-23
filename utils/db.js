var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    database: 'blogsite',
    user: 'root',
    password: ''
});

module.exports = db;