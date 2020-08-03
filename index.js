var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

var GerenciadorAutorizacaoCadastrarController = require("./module/gerenciador-autenticacao-module/gerenciador-autorizacao-controller/gerenciador-autorizacao-cadastrar-controller");
var GerenciadorArtigoController = require("./module/gerenciador-artigo-module/gerenciador-artigo-controller/gerenciador-artigo-controller");

var application = express();
application.use(express.json());
application.use(bodyParser.json());
application.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://josequintino:Kintino8@plblog.peuku.mongodb.net/PLBLOG?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// UC001 - Manter Autorização do Sistema
application.post("/usuario/save", GerenciadorAutorizacaoCadastrarController.save);

// UC002 - Manter Artigo
application.post("/artigo/persist", GerenciadorArtigoController.persist);
application.get("/artigo/findAll", GerenciadorArtigoController.findAll);

application.listen(9094, function() {
    // console.log("Servidor Connectado com Sucesso!");
});