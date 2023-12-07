const Service  = require('./../models/service')
const addService = async(req , res) =>{
    try{

        const service = req.body;

        const service_ =  await  Service.create(service);
         res.json(service_); 
       
    }catch(error){
        res.json({
            error:error.message,
        })
    }

};


const getService =  async(req, res)=>{

    try{

        const services = await Service.find();
        res.json(services);
        
    }catch(err){
        res.json({
            error:err.message,
        })
    }

}

const deleteService = async(req,res )=>{
    try{
       
        const {id } = req.params;
        const deleteRes = await Service.deleteOne({_id:id});
        res.json(deleteRes)

    }catch(error)
    {
        res.json({
            error:error.message,
        })
    }
}
module.exports = {
    addService  ,getService ,deleteService
}