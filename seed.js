const dotenv = require('dotenv').config();
const User = require('./models/user')
const {mongoose} = require('mongoose');
const {userSeedData} = require('./helpers/seedData')



mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("data base connected"))
.catch(() =>console.log("error"))




const SeedDB = async() =>{
    await User.deleteMany({'isAdmin':true});
    console.log("Droping ALL admin");
    await User.insertMany(userSeedData);
}

SeedDB().then(()=>
{
    console.log(" seeding all data");
    mongoose.connection.close();
})
