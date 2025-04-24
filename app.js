// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.write("hello vinit ")
//     res.end()
// })
// server.listen(5000,()=>{
//     console.log("server run on port 5000")
// })

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.end("hello world")
//     }
//     else if(req.url=="/about"){
//         res.write("this is about page")
//         res.end()
//     }
//     else if(req.url=="/contact"){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.end("this is contact page")
//     }
// })
// server.listen(3000,()=>{
//     console.log("server is run on port 3000")
// })

// var url = require('url')
// let c = url.parse('https://www.google.com/search?q=twitter&oq=twi&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBwgCEAAYjwIyBwgDEAAYjwIyBggEEEUYPTIGCAUQRRg90gEHNzQ3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8');
// console.log(c.pathname)
// console.log(c.hostname)
// console.log(c.port)
// console.log(c.search)

var fs = require('fs')
fs.readFile('my.txt','utf8',(err,c)=>{
    if(err)throw err;
    console.log(c)
})
fs.writeFile('my1.txt',"this is new text",(err)=>{
    if(err)throw err;
})
fs.appendFile('my1.txt',"dfdklfjdfkl dfjfkld",(err)=>{
    if(err)throw err;
})