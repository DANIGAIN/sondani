const express = require('express');
const  multer = require('multer');
const cors = require('cors');
const {loginUser , registerUser ,getProfile} = require('../controllers/authController');
const router = express.Router();

//middleware 

router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)


//-------------------------------- auth route ----------------------------------//
router.post('/login', loginUser);
router.post('/signup',registerUser)
router.get('/profile',getProfile);


module.exports = router;



