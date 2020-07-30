var express = require("express");
var bodyParser = require("body-parser");
var GerenciadorAutorizacaoCadastrarController = require("./module/gerenciador-autenticacao-module/gerenciador-autorizacao-controller/gerenciador-autorizacao-cadastrar-controller");
var GerenciadorArtigoController = require("./module/gerenciador-artigo-module/gerenciador-artigo-controller/gerenciador-artigo-controller");

var application = express();
application.use(express.json());
application.use(bodyParser.json());

// UC001 - Manter Autorização do Sistema
application.post("/usuario/save", GerenciadorAutorizacaoCadastrarController.save);

// UC002 - Manter Artigo
application.post("/artigo/save", GerenciadorArtigoController.save);
application.get("/artigo/findAll", GerenciadorArtigoController.findAll);

application.listen(9090, function() {
    // console.log("Servidor Connectado com Sucesso!");
});