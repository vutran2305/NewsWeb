var mysql = require('mysql');

var connection =mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'news1'
});

connection.connect(function(err , connection){
    if(err) console.log("Kết nối CSDL không thành công")
});

module.exports = connection;