var express = require('express')
var app = express();
var port = 3000

var router = require("./routes/first.js")
express.use(router);

express.use((req,res)=>{
    res.status(404).send("page not found")
})

express.lister(port,(err)=>{
    if (err) throw err;
    console.log(`running on ${port} port`)
})