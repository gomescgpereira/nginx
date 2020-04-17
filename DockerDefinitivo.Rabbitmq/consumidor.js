var amqp = require('amqplib');
let mysql  = require('mysql');
let config = require('./config.js');

// Uri = new Uri(@"amqp://logUser:logPwd@192.168.1.10:5672/EnterpriseLog"), 

amqp.connect('amqp://logUser:logPwd@192.168.1.10:5672/EnterpriseLog')
.then(function(conn) {
    console.log('Conectado');
     return conn.createChannel();
 })
 .then(function(ch) {
   console.log('canal criado');


   ch.prefetch(1); // Quantas mensagens por vez meu consumidor pode trazer
   
   ch.consume('basedados', function(msg){
     
      console.log('Mensagem Recebida: %s', msg.content.toString()); 
      
   
    salvarBanco(msg.content.toString());
    ch.ack(msg); // Envia para servidor que msg foi consumida com sucesso 
    //se por acaso de errado
    //ch.nack(msg); // se der errado
 });


});

function salvarBanco(msg)
{
  const obj = JSON.parse(msg);
 //var post  = {id: 1, title: 'Hello MySQL'}; 
 const newBook = {Servico: obj.Servico, Tipo: obj.Tipo, Dia: obj.Dia, Valor: obj.Valor, Status: obj.Status }
  let connection = mysql.createConnection(config);
  let sql = 'INSERT INTO clientes(Nome,Idade,Sexo) VALUES(' + obj.nome + ',' + obj.idade + ',' + obj.sexo + ')';
  connection.query(
    'INSERT INTO tarefa SET ?', newBook , (err, res) => {
    if (err) 
     console.log(err)
    //console.log('Teste');
  });
  //console.log(sql); 
  //connection.query(sql);
  connection.end();


}


