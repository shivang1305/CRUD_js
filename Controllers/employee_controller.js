const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const employee = mongoose.model('Employee1');

//always on running the server
router.get('/',(req,res)=>{
    res.render('Employee/addoredit',{
        viewTitle:'Insert Employee Details'
    });
});

//to insert or update the record
router.post('/',(req,res)=>{
    if(req.body.id==='')
        insertRecord(req,res);
    else
        updateRecord(req,res);
});

//to display the list of all records in database 
router.get('/list',(req,res)=>{
    employee.find((err,docs)=>{
        if(!err){
            res.render(('Employee/list'),{
                viewTitle : 'Employee List',
                list:docs
            });
        }
        else
            console.log('error occured while fetching data');
    });
});

//when user hit the delete button
router.get('/delete/:id',(req,res)=>{
    deleteRecord(req,res);
});

//to upadate details of an employee
router.get('/:id',(req,res)=>{
    employee.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.render('Employee/addoredit',{
                viewTitle : 'Update Employee Details',
                employee : docs
            });
        }
        else
            console.log('error occured while rendering the list : '+err);
    });
});

//function to insert a new record into database
function insertRecord(req,res){
    var emp = new employee();
    emp.fullname = req.body.fullname;
    emp.phonenumber = req.body.phonenumber;
    emp.email = req.body.email;
    emp.password = req.body.password;
    emp.city = req.body.city;
    // console.log("kya password"+password)
    emp.save((err,doc)=>{
        if(!err)
            res.redirect('Employee/list');
        else  
            console.log('error occured during insertion of record in database');
    });
}

//function to update the record into database
function updateRecord(req,res){
    employee.findOneAndUpdate({id:req.body.id},req.body,{new:true},(err,docs)=>{
        if(!err)
            res.redirect('Employee/list');
        else
            console.log('error occured during updating a record in database : '+err);
    });
}

//function to delete the record from database
function deleteRecord(req,res){
    employee.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err)
            res.redirect('/Employee/list');
        else
            console.log('error occured during deleting a record from database : '+err);
    });
}

module.exports = router;