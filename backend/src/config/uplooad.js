const multer = require('multer');
const path = require('path')

module.exports= {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    }) //destino das fotos e pega os nome das fotos, igual esta salva no pc do usuario
}