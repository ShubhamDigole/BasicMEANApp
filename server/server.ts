const expre = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db');
let employeeController = require('./controllers/employeeController')


let app = expre();
app.use(bodyParser.json());

app.listen(3000, () => console.log("server started successfully...."));

app.use("/employees",employeeController);