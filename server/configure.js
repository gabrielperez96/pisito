var path = require('path'),
exphdb = require ('express-handlebars'),
express = require ('express'),
bodyParser = require('body-parser'),
morgan = require ('morgan'),
methodOverride = require('method-override'),
errorHandler =require('errorhandler'),
multer = require('multer');
cookieParser=require('cookie-parser');
moment = require('moment'),
multer = require('multer');
//cargar un modulo personalizado
//con las rutas validas de la app
var routes = require ('./routes');

module.exports = function(app){
    //configurando handlebars
    //1. dar de alrta el template engine y config
    app.engine('hbs',exphdb.create({
        defaultLayout: 'main',
        extname: 'hbs',
        layoutDir: path.join(app.get('views'),'layouts'),
        partialDir: [path.join(app.get('views'),'partials')],
        helpers:{
            timeago: function(timestamp){
                return moment(timestamp).startOf('minutes').fromNow();
            }
        }
    }) .engine);
     // 2. Asignarlo como el template engine
    // de trabajo
    app.set('view engine', '.hbs');
    //conectando los middlewares
    //middleware para login de http
    app.use(morgan('dev'));

    //parseo de url
    app.use(bodyParser.urlencoded({
        'extended':true
    }));
    app.use(bodyParser.json());
    //compatibilidad de verbos http
    app.use(methodOverride());
    //parseo de cookies
    app.use(cookieParser('Algun-Valor-secreto'));
    //crear las rutas de prueba de la app
    app = routes(app);
    //hablilitando el servicio estatico de archivos
    app.use('/public/',
    express.static(path.join(
        __dirname, '../public'
    )));
    //middleware para el manejo de 
    //errores
    if (app.get('env')==='development'){
        app.use(errorHandler());
    }
    return app;
};