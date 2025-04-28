function home(req,res){
    res.send("hello")
}
function about(req,res){
    res.send('About Page')
}
function contact(req,res){
    res.send("Contact Page")
}
module.exports = {home,about,contact}