var express = require("express");
var bodyParser = require("body-parser");
var GerenciadorAutorizacaoCadastrarController = require("./module/gerenciador-autenticacao-module/gerenciador-autorizacao-controller/gerenciador-autorizacao-cadastrar-controller");

var application = express();
application.use(express.json());
application.use(bodyParser.json());

application.post("/usuario/save", GerenciadorAutorizacaoCadastrarController.save);

// application.post('/usuario/save', function(request, response) {
//     response.status(201).json(request.body);
// });

application.listen(9090, function() {
    // console.log("Servidor Connectado com Sucesso!");
});