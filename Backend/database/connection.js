const mysql = require('mysql');

const dbCredentials = {
    host: 'localhost',
    user: 'Matthew',
    password: '123', // Password should be a string, not a number
    database: 'swen',
    port: 3307
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
