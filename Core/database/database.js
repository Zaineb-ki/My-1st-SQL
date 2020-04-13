const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1' || 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    databaseName: 'citations'
})

connection.connect((err) => {
    if(err) throw err
    console.log('the connection is successfully :)');
    
})

module.exports = connection;