
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');
const errorController = require('./controllers/error');

const app = express(); 


const ports = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/auth', authRoutes);
app.use('/order', orderRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

let nz_date_string = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

let date = new Date(nz_date_string);

console.log(date);

let curr_date = (date.getDate() + "." + date.getHours());

console.log(curr_date);
app.listen(ports, ()=> console.log(`Listening on Port ${ports}`));