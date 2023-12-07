const { required } = require; //config do NODEMON
const express = require('express')//importando express
const app = express()//utilizando a variavel app como chamada pro express

const PORT = 8081;
app.use(express.static("index"))//esta configuração faz a requisição para o Browser trazer todos os arquivos integrados a parte de HTML (como o CSS e o JavaScript)

//main page
app.get("/",function(req, res){
    res.sendFile(__dirname+"/index/main.html")//"__dirname" puxa o diretorio base onde o arquivo está e deve se concatenar com o segmento do arquivo que quero inserir
});

//porta do servidor
app.listen(PORT,() =>{console.log(`Servidor Rodando em http://localhost:${PORT}`);});