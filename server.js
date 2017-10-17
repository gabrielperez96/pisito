//cargando Express
const express = require("express"),
    path = require("path"),
        config = require("./server/configure");
//creando lainstacia de una app
var app = express();
// guardando unas variables de entorno
app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || '0.0.0.0');
//configurar la ruta de las vistas
app.set('views', path.join(__dirname,"views"));
//aplicando configuraciones a nuestra App
app = config(app);
//crear las rutas de la app
app.get('/', (req, res)=>{
    //codificando respuesta
    res.send("Hola,ITO!");
})
//consultar variables de entorno
//para rescatar el ip y el PORT
const IP = app.get('ip');
const PORT = app.get('port');
//iniciar el servidor
app.listen(PORT,IP, (err)=>{
    if(err){
        console.log("> Error al iniciar server");
        throw err;
    }
    console.log(`> Servidor escuchando en http://${IP}:${PORT}`);
})
