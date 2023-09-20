const express = require('express');
const  multer = require('multer');
const cors = require('cors');
const {addDoctor , getDoctor ,deleteDoctor} = require('./../controllers/doctorController');
const {upload} = require('./../helpers/doctor');
const router = express.Router();


//middleware 

router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

//--------------------------------doctor route --------------------------------//

router.post('/doctor',upload.single('image'),addDoctor);
router.get('/doctor',getDoctor);
router.delete('/doctor/:id' ,deleteDoctor);


module.exports = router;

