var prop = require('./db_proerties');
var mysql = require('mysql2');
module.exports = {
    getConnection: () => {
        return mysql.createConnection(prop);
    }
}