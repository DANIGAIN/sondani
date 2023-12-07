const mongoose = require('mongoose');

const contactSchima = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true ,'Userid is required ']
    },
    name: String,
    subject:String ,
    email:String ,
    message:String,
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

module.exports = mongoose.model('Contact' , contactSchima);