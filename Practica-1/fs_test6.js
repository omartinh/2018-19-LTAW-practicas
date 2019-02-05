var fs = require('fs');

//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('tes2.txt', 'utf8', (err, data) => {
  if (err) {
    console.log()
    console.log("---> ERROR!!")
    console.log(err.message)
    console.log()
  } else{ //Lectura normal, cuando no hay errores
    console.log("---> Comienzo del fichero")
    console.log(data)
    console.log("---> Final del fichero")
  }
});

//-- Similar al fs_test3 pero simplificado.
//Leemos un fichero inexistente test2.txt
