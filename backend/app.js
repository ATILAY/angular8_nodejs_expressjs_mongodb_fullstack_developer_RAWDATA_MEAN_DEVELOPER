const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./route');


var app = express();

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/todolist', {
    useMongoClient: true
});
mongoose.connection.on('connected', ()=>{
    console.log('mongodb connected');
});
mongoose.connection.on('error',(err)=>{
    console.log(err);

});

app.use(cors());

app.use(bodyParser.json());

app.use('/', route);

app.listen(PORT, ()=>{
    console.log('Server has been started on port:' + PORT);
});