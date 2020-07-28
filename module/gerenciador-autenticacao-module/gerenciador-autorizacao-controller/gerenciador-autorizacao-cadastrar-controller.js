var GerenciadorAutorizacaoCadastrarService = require("../gerenciador-autorizacao-service/gerenciador-autorizacao-cadastrar-service");

var save = function(request, response) {

    GerenciadorAutorizacaoCadastrarService.save(request.body);

    response.status(201).json(request.body);

}

exports.save = save;