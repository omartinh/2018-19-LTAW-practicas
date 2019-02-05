var http = require('http');
//-- http-test2 SIMPLIFICADO
console.log("Arrancando servidor...")

//-- Configurar el servidor. Cada vez que llegue una peticion se emite
//-- Un evento y se envia a la funcion server_req
server = http.createServer((req, res) => {
  console.log("---> Peticion recibida")
}).listen(8080);
