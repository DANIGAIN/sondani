const mongoose = require('mongoose');
const {Schema} = mongoose;

const doctorSchema = new Schema({
    name: String,
    specialist:String,
    rating:String ,
    image: String  
})

const DoctorModel = mongoose.model('Doctor' ,doctorSchema);

module.exports = DoctorModel;