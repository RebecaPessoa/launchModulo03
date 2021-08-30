const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//express "observa a pasta public para oferecer arquivos estáticos (como css)"
server.use(express.static('public'))

//configurando a template engine (nunjucks):
server.set("view engine", "html")

//caminho e opções em formato de objeto:
nunjucks.configure("views", {
    //informa que será o express e a variavel que será usada (server)
    express:server
})


server.get("/", function(req,res){
    return res.render("index")
})
server.listen(5000, function(){
    console.log("server is running")
})