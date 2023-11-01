const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const erroController  = require('./controllers/erro');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const adminlogin = require('./routers/login');
const adminroutes = require('./routers/admin');
const shoproutes  = require('./routers/shop');
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminroutes); 
app.use('/', adminlogin)
app.use(shoproutes);
 //app.get('/', admincontroller.renderpage); 
//app.use('/views/login', adminroutes);
//app.post('/',admincontroller.loginpage);
app.use(erroController.get404)
app.listen(3000);