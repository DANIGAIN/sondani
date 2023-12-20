const { json } = require('express');
const Appointment = require('../models/appointment');


const addAppointment = async(req,res) =>{
  
 
    const {patientId,name,age,address,email,phone,doctor,tropic,app_Time,status} = req.body;
    const date = new Date(app_Time);
    try{

        const obj= {
            patientId,
            name,
            address,
            email,
            phone,
            doctor,
            specialist:tropic,
            app_Time:date.toISOString(),
            status
        }
        if(age != '') obj.age = parseInt(age);     
        const specialist = await Appointment.create(obj)
        return res.json(specialist)

    }catch(error)
    {
        if (error.name === 'ValidationError') {   
                res.json({
                    error:Object.values(error.errors).map(val => val.message),
                })
            }
  
    }

}

const findAppointment = async(req , res) =>{
    const {id} = req.params;
    try{

        const app = await Appointment.find({patientId:id}).populate(['doctor','specialist'])
        res.json(app);
    }catch(error)
    {
        res.json({
            error:error.message,
        })
    }
}  

const deleteAppointment =  async(req , res) =>{
    const {id} = req.params ;
    try{

       const deleteDoctor = await Appointment.deleteOne({_id :id});
       return res.json(deleteDoctor);

    }catch(error){
        res.json({
            error:error.message,
        })
    }
}

const findAppointmentById = async(req,res) =>{

    const {id} = req.params;
    try{

        const app = await Appointment.find({_id:id}).populate(['doctor','specialist'])
        // const app = await Appointment.find();
        res.json(app);
    }catch(error)
    {
        res.json({
            error:error.message,
        })
    }


}

const updateAppointment = async(req ,res) =>{
    const {patientId,name,age,address,email,phone,doctor,tropic,app_Time,status} = req.body;
    const date = new Date(app_Time);
    try{

        const obj= {
            patientId,
            name,
            age:parseInt(age),
            address,
            email,
            phone,
            doctor,
            specialist:tropic,
            app_Time:date.toISOString(),
            status
        }
   
       
         const specialist = await Appointment.updateOne({_id:req.params.id} ,{$set:obj})
         return res.json(specialist)

    }catch(error)
    {
        if (error.name === 'ValidationError') {   
                res.json({
                    error:Object.values(error.errors).map(val => val.message),
                })
            }
  
    }
}

const findAllAppointment = async(req ,res) =>{
    try{

        const app = await Appointment.find().populate(['doctor','specialist'])
        res.json(app);
    }catch(error)
    {
        res.json({
            error:error.message,
        })
    }

}

const updateAppointmentStatus = async(req,res) =>{
    try{

        const specialist = await Appointment.updateOne({_id:req.params.id} ,{$set:req.body})
        return res.json(specialist)

    }catch(error)
    {
        res.json({
            error:error.message
        })
    }
}


const countAppointment = async(req, res) =>{
    const app = await Appointment.find({status:req.params.status}).count();
    return res.json(app)

}

module.exports = {
    addAppointment , findAppointment, deleteAppointment ,updateAppointment ,findAppointmentById ,findAllAppointment , updateAppointmentStatus ,countAppointment
}