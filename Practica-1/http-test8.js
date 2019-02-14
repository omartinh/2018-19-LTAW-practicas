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
  //-- El codigo 200 se usa para indicar q todo ok
  //-- En el campo Content-tpye tenemos que introducir el tipo MIME
  //-- de lo q devolvemos

  var mime = "text/html"
  res.writeHead(200, {'Content-Type': mime});

  //-- Ahora escribimos el cuerpo: los datos a enviar, en html
  //-- En este ejemplo se envia directamente el html

  var msg = `
    <!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Mi tienda</title>
      </head>
      <body>
        <p> WELCOME!</p>
      </body>
    </html>
  `

  //-- Meter el mensaje en la respuesta
  res.write(msg);
  //--Ahora terminamos la respuesta, invocando el metido tienda
  res.end();
}).listen(8080);
