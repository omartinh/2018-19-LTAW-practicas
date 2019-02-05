var fs = require('fs');

//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', show_file);

//-- Funcion llamada cuando se ha terminado de leer el fichero
//-- Err: objeto q tiene informacion sobre el error producido
//-- data: datos  que se han leido del fichero.
function show_file(err, data) {
    console.log(data)
}
