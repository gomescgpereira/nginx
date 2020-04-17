const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '192.168.1.10',
  port     : 3306,
  user     : 'root',
  password : 'idec29',
  database : 'basesalao'
});

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou!');
  })
