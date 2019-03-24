//import * as mongoose from 'mongoose';
import * as express from 'express';
import * as bodyParser from 'body-parser';
//import * as mongoose from 'mongoose';

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/onlyForTest',{ useNewUrlParser: true }, (err) => {
    if(!err){

        console.log("connected successfully");
        
    }
    else{

        console.log("error error" + JSON.stringify(err));
        
    }

})

module.exports = mongoose;