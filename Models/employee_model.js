const mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    fullname:{
        type:String
    },
    phonenumber:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    city:{
        type:String
    }
});

mongoose.model('Employee1',employeeSchema);