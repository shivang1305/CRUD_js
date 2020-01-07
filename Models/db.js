const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Employees',{useNewUrlParser:true},(err)=>{
    if(!err)
        console.log('MongoDB connected successfully');
    else
        console.log('Error occured : '+err);
});

require('./employee_model');