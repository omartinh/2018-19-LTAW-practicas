
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var num_user = 0;
//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("Página principal2: /")
});

//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Fichero js solicituado")
});

app.get('/chatstyle.css', function(req, res){
  res.sendFile(__dirname + '/chatstyle.css');
  console.log("Fichero css solicituado")
});


//-- Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');

  num_user += 1;

  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado');
    num_user -= 1;
  });

  //-- Detectar si se ha recibido un mensaje del cliente
   socket.on('new_message', msg => {

   //-- Notificarlo en la consola del servidor
   console.log("Mensaje recibido: " + msg)
    //-- Tratamos los distintos mensajes
    //-- tipo list tipo help tipo hello tipo date
   //-- Emitir un mensaje a todos los clientes conect.
   io.emit('new_message', msg);
 });

});
