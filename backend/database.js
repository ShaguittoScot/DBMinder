const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Weak',
    database: 'mathCode'
});

module.exports = db.promise();
