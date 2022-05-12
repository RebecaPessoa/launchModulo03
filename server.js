const express = require('express') //1 cria variável express
const nunjucks = require('nunjucks') //5 instala e chama nunjucks

const server = express() //2 cria a variável server para receber express
const videos = require("./data")//referenciando a raiz do projeto. a variável videos é o array de dados

//8 express "observa a pasta public para oferecer arquivos estáticos (como css)"
server.use(express.static('public'))

//6configurando a template engine (nunjucks):
server.set("view engine", "njk") 

//caminho e opções em formato de objeto:
nunjucks.configure("views", {
    //7 informa que a opção será o express e a variavel que será usada (server)
    express:server,
    autoescape: false, //evita que apareça injeção de html
    noCache: true 
})

server.get("/", function(req,res){  //4 criar a rota 
    
    const about = {
        avatar_url: "https://avatars.githubusercontent.com/u/4651221?v=4",
        name: "Rebeca Pessoa",
        role: "Arquitetura - Desenvolvimento Web",
        description: 'Front-end / IFC - Open BIM <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            {
                name: "GitHub",
                url: "https://github.com/RebecaPessoa"
            },
            {
                name:"Twitter",
                url: "https://github.com/RebecaPessoa"
            },
            {
                name: "Linkedin",
                url: "https://github.com/RebecaPessoa"
            }
        ]

    }

    return res.render("about", {about: about}) //por serem iguais, poderia estar somente passando about 
})

server.get("/portfolio", function(req,res){ 
    return res.render("portfolio", {items: videos}) //dentro do objeto, cria-se um atributo chamado items, passando videos
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        if (video.id == id){
            return true
        }
    })
    if (!video){
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function(){ //3 cria a callback do servidor
    console.log("server is running")
})