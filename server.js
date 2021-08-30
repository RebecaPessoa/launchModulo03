const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//configurando a template engine (nunjucks):
server.set("view engine", "html")

//caminho e opções em formato de objeto:
nunjucks.configure("views", {
    //informa que será o express e a variavel que será usada (server)
    express:server
})


server.get("/", function(req,res){
    return res.send("Hi! How it is going?")
})
server.listen(5000, function(){
    console.log("server is running")
})