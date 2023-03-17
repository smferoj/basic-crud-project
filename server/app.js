const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');
const path = require('path');

// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require("xss-clean");
const hpp = require('hpp');
const cors = require('cors');
 
// Database
const mongoose = require('mongoose');
app.use(express.static('client/build'))

// Security Middlware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(cors());
app.use(hpp());

// Body Parser
app.use(bodyParser.json())

// Rate Limiter
const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

//Mongo DB Connection

let URI = "**************************";
let OPTION ={user:'**************',pass:'*************', autoIndex:true}
mongoose.connect(URI, OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})


// Backing API Routing
app.use("/api/v1", router);

// Front End Taggin
app.get('*',function(req, res){
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
   
})
 





module.exports = app;