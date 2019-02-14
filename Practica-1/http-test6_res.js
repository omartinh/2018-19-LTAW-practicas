var http = require('http');
//-- http-test2 SIMPLIFICADO
console.log("Arrancando servidor...")

//-- Configurar el servidor. Cada vez que llegue una peticion se emite
//-- Un evento y se envia a la funcion server_req
http.createServer((req, res) => {
  console.log("---> Peticion recibida")
  console.log("Recurso solicitado (URL): " + req.url)
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(req.url);
  console.log("Peticion atendida")
  //-- Es un objeto. Esto imprimira todas sus propiedades.
}).listen(8080);
