// var express = require('express')
// var app = express()
// //------------routes-----------
// var routes = require("./routes/routes.js")
// app.use(routes)
// //===========================
// app.listen(3000,()=>{
//     console.log("running")
// })

var express = require('express')
var app = express();
// const dotenv = require('dotenv')
// dotenv.config();
// port = process.env.PORT

const port = require('./config/envConfig.js')

// const server=http.createServer((req,res)=>{
//     res.write("hello")
//     res.end()
// })
app.listen(port,()=>{
    console.log(`runnin on ${port} port`)
})