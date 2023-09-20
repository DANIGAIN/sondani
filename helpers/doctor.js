const multer = require('multer');
const path = require('path');
const uploadDir =  "./uploads/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
       const fileExt =  path.extname(file.originalname);
       const filename = file.originalname
       .replace(fileExt ,"")
       .toLowerCase()
       .split(" ")
       .join("-")+'-'+Date.now();
       cb(null , filename + fileExt);
 
    }
});

const upload = multer({
    storage,
    limits:{
        fieldSize:10000000, // 1MB 
    },
    fileFilter:(req , file , cb)=>{


      if(file.fieldname === 'image')
      {
        if(
            file.mimetype ==='image/png'||
            file.mimetype ==='image/jpg'||
            file.mimetype ==='image/jpeg'
        ){
            cb(null , true);
        }else 
        {
            cb(new Error("only .jpg .png or .jpeg formate allowed"));
        }
      }else 
      {
           cb(new Error("there wes an unknown error"));
      }

    },
}) ;

module.exports = {
    upload
}