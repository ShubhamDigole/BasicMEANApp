"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as mongoose from 'mongoose';
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/onlyForTest', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("connected successfully");
    }
    else {
        console.log("error error" + JSON.stringify(err));
    }
});
module.exports = mongoose;
//# sourceMappingURL=db.js.map