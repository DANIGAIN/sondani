const express = require("express");
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 8000 ;
const authRoute = require('./routes/authRoute.js');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("data base connected"))
.catch(() =>console.log("error"))

//middleware 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.use('/',authRoute);




 





app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})
