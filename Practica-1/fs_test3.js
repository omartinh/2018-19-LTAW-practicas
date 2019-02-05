var fs = require('fs');

console.log("__ESTE MENSAJE ESTA AL COMIENZO DEL CODIGO__")
//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', function (err, data){
  console.log("--->COMIENZO DEL FICHERO")
  console.log(data)
  console.log("--->FINAL DEL FICHERO")
});

//-- Funcion llamada cuando se ha terminado de leer el fichero
//-- Err: objeto q tiene informacion sobre el error producido
//-- data: datos  que se han leido del fichero.
//-- En js funciones son objetos: la linea se lee: Lanzar la lectura fichero txt
//-- y seguir ejecutando instrucciones; cuando el fichero se haya leido, ejecuta instr entre llaves


console.log("__FIN DEL CODIGO__")
