const mysql = require('mysql');

const dbCredentials = {
    host: 'bncvmljswjf6puzcuhuf-mysql.services.clever-cloud.com',
    user: 'uhpygwdzyl4luoy1',
    password: 'oSIref3uFecmHoN9Lg9Z', // Password should be a string, not a number
    database: 'bncvmljswjf6puzcuhuf',
    port: 3306
};

const db = mysql.createPool(dbCredentials);

module.exports = (query) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if (err) {
                reject("Error: " + err);
                return; // Add return statement to prevent further execution
            }
            connection.query(query, (err, rows) => {
               
                if (err) {
                    reject("Error: " + err);
                } else {
                    resolve(rows);
                }
                connection.release(); 
            });
        });
    });
};
