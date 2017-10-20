//cargar de dependencia
var fs= require('fs'),
path = require('path');
//controlador image
module.exports = {
    //action methods
    index : (req, res) => {
        //creando el viewModel
        var viewModel={
          image: {
              uniqueId: 4,
              title: "descripcion asombrosa 4",
              filename:"sample.jpg",
              views: 0,
              likes: 0,
              timestamp: Date.now()

          } , 
          comments:[
              {
                  image_id: 4,
                  email: "officialdjperez@gmail.com",
                  name: "Test Tester",
                  gravatar:'f4a261af2d65b4921fe32e42d13f432b',
                  timestamp: Date.now()
              }
          ]
        };
        res.render('image', viewModel);
    },
    create : (req, res)=>{
        var saveImage = ()=>{
            var imgUrl = "";
            // Challenge
            var dictionary = "qwertyuiopasdfghjklzxcvbnm1234567890";
            for (var index = 0; index < 6; index++) {
                imgUrl += dictionary.charAt(Math.floor(
                    Math.random() * dictionary.length
                ));                
            }
            // Rescatar la ruta del archivo
            // cargado
            var tempPath = req.files[0].path,
                ext = path.extname(req.files[0].originalname).toLowerCase(),
                targetPath = path.resolve('./public/upload/' + imgUrl + ext);
                // Verificar que el archivo tiene una extencion
                // valida
                if( 
                    ext === '.png' ||
                    ext === '.jpg' ||
                    ext === '.jpeg' ||
                    ext === '.gif' ){
                    fs.rename(tempPath, targetPath, function(err){
                        if(err){
                            console.log("> Error al guardar archivo");
                            throw err;
                        }
                        // Redirecciono a la pagina
                        // que visualiza la imagen cargada
                        res.redirect('/images/index/' + imgUrl);
                    });    
                }else{
                    // Si no es una extencion valida
                    // se elimina la imagen cargada
                    fs.unlink(tempPath, function(err){
                        if(err){
                            console.log("> Error al borrar una imagen no permitida...");
                        }
                        // 
                        console.log("> Imagen Borrada: " + tempPath);
                        res.status(500).json({
                            error: "Solo se permiten archivo de imagen"
                        }); 
                    });
                }
        };
        saveImage();
       
    },

    like : (req, res) => {
        res.send(`> se ejecuta el metodo <b>like</b> del imageController con el parametro image_id: ${req.params.image_id}`);
    },
    comment : (req, res) => {
        res.send(`> se ejecuta el metodo comment del imageController con el parametro image_id: ${req.params.image_id}`);
    },
};
