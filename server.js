const express = require('express') //1 cria variável express
const nunjucks = require('nunjucks') //5 instala e chama nunjucks

const server = express() //2 cria a variável server para receber express

//8 express "observa a pasta public para oferecer arquivos estáticos (como css)"
server.use(express.static('public'))

//6configurando a template engine (nunjucks):
server.set("view engine", "njk") 

//caminho e opções em formato de objeto:
nunjucks.configure("views", {
    //7 informa que a opção será o express e a variavel que será usada (server)
    express:server
})


server.get("/", function(req,res){  //4 criar a rota principal
    return res.render("about") 
})

server.get("/portfolio", function(req,res){ 
    return res.render("portfolio")
})


server.listen(5000, function(){ //3 cria a callback do servidor
    console.log("server is running")
})