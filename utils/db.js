// var mysql = require('mysql');
// var pgp = require('pg-promise')(/* options */)
// var db = pgp('postgres://rxgdcpdedvnnzi:19af6211780021540ef0d1c13fa4f25e7c25bb2d2fd58ef89af320d18e0d8442@ec2-75-101-147-226.compute-1.amazonaws.com:5432/dctfhk8c8lbgn1')
// var db = mysql.createConnection({
//     host: 'localhost',
//     database: 'blogsite',
//     user: 'root',
//     password: ''
// });



const Pool = require('pg').Pool
const db = new Pool({
    user: 'pjqwmginkzwxcr',
    host: 'ec2-23-21-91-183.compute-1.amazonaws.com',
    database: 'd8k6i4p5nbvc05',
    password: 'a26b20273b7eb7400276f6455ae7a30fb6ff08a55c6c1f1f0f641ff4ce937151',
    port: 5432,
    ssl: true
});
db.on('connect', () => {
    console.log('connected to the db');
});
db.connect();
module.exports = db;

