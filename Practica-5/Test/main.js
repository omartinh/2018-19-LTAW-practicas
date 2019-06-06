const electron  = require('electron')

console.log("Arrancando electron...")

//-- Punto de entrada. En cuanto electron estál listo,
//-- ejecuta esta funcion

electron.app.on('ready', ()=>{
  console.log("Evento Ready!!");

  // Crear ventana principal de nuestra interfaz grafica
  win = new electron.BrowserWindow({
    width: 600,
    height: 400
  })
  //Para eliminar menu por defecto barra arriba
  win.setMenuBarVisibility(true)
  // Cargar interfaz grafica, que se encuentra en index.html
  win.loadFile('index.html')
})
