const mongoose = require('mongoose')
const {Schema} = mongoose;

const doctorSchema = new Schema({
    name:{
        type:String,
        required:[true , "Name is require"],
    },

    email:{
        type:String,
        unique:[true,"Email is unique"],
        required:[true ,"Email is require"],
    },
    specialist:[{
        type:mongoose.Types.ObjectId,
        ref:'Specialist',
    }],
    rating:{
        type:String ,
        required:[true , "reting fild is require"]
    },
    image: String ,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
      },
      updatedAt: { 
        type: Date,
        default: () => Date.now(),
      },
})

const DoctorModel = mongoose.model('Doctor' ,doctorSchema);

module.exports = DoctorModel;