
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql2')
const path = require('path');

const port = process.env.port || 9008;
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(express.json());
app.use(express.static('public'));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'public','home.html'))
})


const routes = require('./server/routes/student');
app.use('/api', routes);
app.listen(port,()=>{
    console.log("connected",port);
})