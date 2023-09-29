const express = require('express');
const cors = require('cors');
const {addDoctor , getDoctor ,deleteDoctor ,findDoctor} = require('./../controllers/doctorController');
const {addSpecialist , getSpecialist ,deleteSpecialist} = require('../controllers/specialistController');
const {addAppointment , findAppointment , deleteAppointment ,updateAppointment ,findAppointmentById ,findAllAppointment ,updateAppointmentStatus ,countAppointment} = require('../controllers/appointmentController')
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


//-------------------------------- Specialist of the doctor -------------------//

router.post('/specialist', addSpecialist);
router.get('/specialist', getSpecialist);
router.delete('/specialist/:id', deleteSpecialist);


//------------------------- Specialist -> doctor
router.get('/doctor/find/:id', findDoctor);


//---------------------------------- appointment  ------------------------------//

router.post('/appointment',addAppointment);
router.put('/appointment/:id',updateAppointment)
router.put('/appointment/status/:id' ,updateAppointmentStatus)
router.delete('/appointment/:id',deleteAppointment);
router.get('/appointment/find/:id',findAppointment);
router.get('/appointment/:id',findAppointmentById);
router.get('/appointment' ,findAllAppointment);
router.get('/appointment/count/:status',countAppointment);


module.exports = router;

