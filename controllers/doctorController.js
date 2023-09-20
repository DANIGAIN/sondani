const { json } = require('express');
const Doctor = require('./../models/doctor');

const addDoctor = async(req , res )=>
{
    try{

        const {name  ,specialist , rating} = req.body;

        if(!name){
            res.json({
                error:"name is require"
            })
        }
        if(!specialist) {
            res.json({
                error:"specialist is require"
            })
        }
        if(!rating){
            res.json({
                error:"reting fild is require"
            })
        }
        
        const obj = {
            name , 
            specialist ,
            rating ,
            image :req.file.filename
        }
    
        const doctor = await Doctor.create(obj);
        res.json(doctor);
        
    }catch(error){
      
        res.json({
            error:"Doctor  is not added"
        })
    }
}

const getDoctor = async(req, res) =>{

    const doctors  =  await Doctor.find();
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

const deleteDoctor = (req , res) =>{
    
    try{
        const {id} = req.params;
        const user = Doctor.find({_id :id });
        const dUser = Doctor.deleteOne(user);
        res.json(dUser);

    }catch(error)
    {
        res.json({
            error:"Doctor is not Deleted",
        })
    }
}


module.exports = {
    addDoctor ,
    getDoctor,
    deleteDoctor
}