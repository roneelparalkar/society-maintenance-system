const mysql = require('mysql');
const config = require('./config.js');
let pool = mysql.createPool(config.DB_CONFIG);

module.exports = (query, values, cb) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(query, values, function (error, results) {
            connection.release();
            if (error) throw error;
            console.log('RESULT', results);
            cb(error, results)
        });
    });
};