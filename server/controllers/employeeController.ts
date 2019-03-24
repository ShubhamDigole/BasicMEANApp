const express = require('express');
let router = express.Router();
let { Employees } = require('../models/employee');
let ObjectId = require('mongoose').Types.ObjectId;


router.get('/', (req, res) => {
    Employees.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("error in retriving the employees data" + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {

    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records Available With Given Id :   ${req.params.id}`);

    Employees.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("error in retriving the employees data" + JSON.stringify(err, undefined, 2));
        }
    });
    
});

router.post('/', (req, res) => {
    var emp = new Employees({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
        });

    emp.save((err, docs) => {
        if (!err) { res.send(docs);    }
        else {
            console.log("error in saving the employees data" + JSON.stringify(err, undefined, 2));
        }
    });
});


router.put('/:id', (req, res) => {

    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records Available With Given Id : +  ${req.params.id}`);

    var emp = new Employees({
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary
            });

    emp.findByIdAndUpdate(req.params.id, { $set: emp }, {new : true}, (err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("error in updating the employees data" + JSON.stringify(err, undefined, 2));
        }
    });
    });

    router.delete('/:id', (req, res) => {

        if(!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No Records Available With Given Id : +  ${req.params.id}`);
    
        Employees.findByIdAndRemove(req.params.id, (err, docs) => {
            if (!err) {
                res.send(docs);
            }
            else {
                console.log("error in updating the employees data" + JSON.stringify(err, undefined, 2));
            }
        });
});

module.exports = router;