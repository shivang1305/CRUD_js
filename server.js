require('./Models/db');


const express = require('express');
const path = require('path');
const employee_controller = require('./Controllers/employee_controller');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');


const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.set('Views',path.join(__dirname,'/Views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'main_layout',layoutsDir:__dirname+'/Views/Layout/'}));
app.set('view engine','hbs');

app.listen(3000,()=>{
    console.log('Server Started at 3000');
});

app.use('/Employee',employee_controller);