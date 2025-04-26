
var express = require ('express')

var express = express()

var port = 3000

express.get("/",(req,res)=>{
    res.send("run");
})
express.get("/about",(req,res)=>{
    res.send("about run")
})
express.use((req,res)=>{
    res.status(404).send("page not found")
})
express.listen(port,(err)=>{
    if (err) throw err;
    console.log(`running on ${port} port`)
}) 