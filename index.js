const express = require("express");
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const authRoute = require('./routes/authRoute.js');
const doctorRoute = require('./routes/doctorRoute.js');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("data base connected"))
.catch(() =>console.log("error"))

//middleware 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

//------------------------------------------- permission images -------------------//

app.use('/images' ,express.static('uploads'));

app.use('/',authRoute);
app.use('/',doctorRoute);




 





app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})
