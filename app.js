const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');

var model = require('./model')

mongoose.connect('mongodb://ariel:Ariel123@ds163360.mlab.com:63360/gma-analytics-db')
.then(() => {
    console.log("SUCCESS")
})
.catch(err=>{
    console.error(err)
})

app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', (req, res)=>{
    new model({first_name:'Ariel'}).save()
    .then(resp=>{
        res.json(resp)
    })
    .catch(err=>{
        console.error(err)
    })
    
    // res.json({response:'HELLO ' + req.query.name1})
})

app.get('/test/:name', (req, res)=>{
    res.json({response:'HELLO ' + req.params.name})
})

app.get('/test/:name/:lname', (req, res)=>{
    res.json({response:'HELLO ' + req.params.name + req.params.lname})
})
 
app.post('/post', (req, res)=>{
    res.json(req.body)
})

app.use("/new", require('./router1'))

app.listen(3000)