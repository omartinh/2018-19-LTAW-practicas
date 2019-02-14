var http = require('http');
var url = require('url');
//-- http-test2 SIMPLIFICADO
console.log("Arrancando servidor...")

//-- Configurar el servidor. Cada vez que llegue una peticion se emite
//-- Un evento y se envia a la funcion server_req
http.createServer((req, res) => {
  console.log("---> Peticion recibida")
  console.log("Recurso solicitado (URL): " + req.url)

  //-- Analisis URL recibida
  var q = url.parse(req.url, true);

  console.log("URL parseada: ")
  console.log("Host: " + q.host)
  console.log("pathname: " + q.pathname)

  //-- Crear mensaje respuesta. 1º la cabecera
  //-- El codigo 200 se usa para indicar

  var qdata = q.query
  console.log(qdata)

  //-- Acceso al objeto
  console.log("Articulo: " + qdata.articulo)
  console.log("Color: " + qdata.color)
}).listen(8080);
