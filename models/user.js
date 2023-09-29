 const mongoose = require('mongoose');
 const {Schema} = mongoose;

 const userSchema = new Schema({
     name: String,
     email:{
        type:String ,
        unique: true
     },
     
     password:String ,
     role: Number ,
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

const UserModel = mongoose.model('User' ,userSchema);

module.exports = UserModel ;