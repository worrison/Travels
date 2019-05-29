const MYSQL = require('mysql2');

const CONN = MYSQL.createConnection({
    host: 'localhost',
    user: 'travelsAdmin',
    password: 'travels1234',
    database: 'edreams',
});

module.exports = CONN;