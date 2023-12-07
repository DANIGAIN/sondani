const express = require('express');
const cors = require('cors');
const {addService ,deleteService , getService} = require('./../controllers/serviceController')
const router = express.Router();


//middleware 

router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.post('/service' ,addService);
router.get('/service' ,getService);
router.delete('/service/:id',deleteService);



module.exports = router;

