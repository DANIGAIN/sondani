
const Doctor = require('./../models/doctor');

const User = require('../models/user')

const addDoctor = async(req , res )=>
{
    try{

        const {name  ,specialist , rating,email} = req.body;
        const obj = {
            name , 
            specialist:specialist.split(","),
            rating ,
            email,
            image :req.file.filename
        }
        const doctor = await Doctor.create(obj);
        
        //change user Role 
        await User.updateOne({email:email,role:10},{role:1})
        res.json(doctor);
        
    }catch(error){
        res.json({
            error:error.message,
        })
    }
}

const getDoctor = async(req, res) =>{

    const doctors = await Doctor.find().populate('specialist');
    const newDoctors = [];
    doctors.map((value , key) =>
    {
        const obj = {
            'id' : value._id,
            'specialist': value.specialist,
            'rating':value.rating,
            'name': value.name,
            'image':`http://localhost:8000/images/${value.image}`

        }
        newDoctors.push(obj)
    })
    res.json(newDoctors);
}

const deleteDoctor = async(req , res) =>{
    
    try{
        const {id} = req.params;
    
        const dUser = await Doctor.deleteOne({_id :id});
        res.json(dUser);

    }catch(error)
    {
        res.json({
            error:"Doctor is not Deleted",
        })
    }
}




const findDoctor = async(req,res)=>{

    try{

        const{id} = req.params ;
        const doctor = await Doctor.find({specialist:id})
        res.json(doctor)

    }catch(error)
    {
        res.json({
            error:error.message,
        })
    }
}


module.exports = {
    addDoctor ,
    getDoctor,
    deleteDoctor ,
    findDoctor
}