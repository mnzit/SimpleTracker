var db = require('../utils/db');

module.exports = function () {
    return {
        getAll: (callback) => {
            var sql = "SELECT * from vw_authors";
            db.query(sql, (err, data) => {
                callback(data);
            });
        },
        getById: (callback, id) => {
            var sql = "SELECT * from vw_authors WHERE id=?";
            db.query(sql, [id], (err, data) => {
                callback(data);
            });
        },
        update: (callback, values) => {
            var sql = "UPDATE tbl_authors SET first_name=?,last_name=?,email=?,contact_no=?,modified_date=CURRENT_TIMESTAMP WHERE id=?";
            db.query(sql, values, (err, data) => {
                callback(data);
            });
        },
        insert: (callback, values) => {
            var sql = "INSERT INTO tbl_authors(first_name,last_name,email,contact_no) VALUES (?,?,?,?)";
            db.query(sql, values, (err, data) => {
                callback(data);
            });
        },
        delete: (callback, id) => {
            var sql = "UPDATE tbl_authors SET deleted_date=CURRENT_TIMESTAMP, is_deleted=true WHERE id=?";
            db.query(sql, [id], (err, data) => {
                callback(data);
            });
        }
    }
}