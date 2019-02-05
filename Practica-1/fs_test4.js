var fs = require('fs');

//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', (err, data) => {
  console.log("--->COMIENZO DEL FICHERO")
  console.log(data)
  console.log("--->FINAL DEL FICHERO")
});

//-- Similar al fs_test3 pero simplificado.
