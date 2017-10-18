//se cargan dependencias para crear las rutas
var express = require('express'),
    router = express.Router();

    //se cargan los controladores
var homeController = require('../controllers/home');
var imageController = require('../controllers/image');

module.exports = function(app){
    //se empaquetan las rutas
    //el obj router
    router.get('/', homeController.index);
    router.get('/home', homeController.index);
    router.get('/home/index', homeController.index);
    router.get('/images/index/:image_id',
    imageController.index);
    router.post('/images/create', imageController.create);
    router.post('/images/like/create/:image_id', imageController.like);
    router.post('/images/comment/create/:image_id', imageController.comment);
    //cargando las rutas empaquetadas a la app
    app.use(router);
    return app;

};