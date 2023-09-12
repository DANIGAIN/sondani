const express = require('express');
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

router.post('/login', loginUser);
router.post('/signup',registerUser)
router.get('/profile',getProfile);


module.exports = router;



