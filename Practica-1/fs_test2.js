var fs = require('fs');

console.log("__ESTE MENSAJE ESTA AL COMIENZO DEL CODIGO__")
//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', show_file);

//-- Funcion llamada cuando se ha terminado de leer el fichero
//-- Err: objeto q tiene informacion sobre el error producido
//-- data: datos  que se han leido del fichero.
//--show_file de ejecutara mientras se sigue ejecutando el programa 
function show_file(err, data) {
    console.log("--->COMIENZO DEL FICHERO")
    console.log(data)
    console.log("--->FINAL DEL FICHERO")
}

console.log("__FIN DEL CODIGO__")
