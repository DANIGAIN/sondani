
const Specialist = require('./../models/specialist')

const addSpecialist = async(req , res) =>{

    try{

        const {category} = req.body;

        const sp =  await  Specialist.create({category});

        res.json(sp);  

    }catch(error){
        res.json({
            error:error.message,
        })
    }

};


const getSpecialist =  async(req, res)=>{

    try{

        const sp = await Specialist.find();
        
        let newSp = [];
        sp.map((data ,ind)=>
        {
            let obj = {
                id:data._id ,
                category:data.category ,
            }
            newSp.push(obj);
        })

       return  res.json(sp);
        
    }catch(err){
        res.json({
            error:err.message,
        })
    }

}


const deleteSpecialist = async(req,res )=>{
    try{
       
        const {id } = req.params;
        const deleteRes = await Specialist.deleteOne({_id:id});
        res.json(deleteRes)

    }catch(error)
    {
        res.json({
            error:error.message,
        })
    }
}
module.exports = {
    addSpecialist ,getSpecialist ,deleteSpecialist
}