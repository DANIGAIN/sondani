const express = require('express');
const cors = require('cors');
const {addContact ,getContacts , deleteContact} = require('./../controllers/ContactController')

const router = express.Router();


//middleware 

router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

//-------------------------------- contact route --------------------------------//

router.route('/contact')
    .post(addContact)
    .get(getContacts)

router.delete('/contact/:id', deleteContact)



module.exports = router;

