var GerenciadorAutorizacaoCadastrarService = require("../gerenciador-artigo-service/gerenciador-artigo-service");

var save = function(request, response) {
    GerenciadorAutorizacaoCadastrarService.save(request.body);
    response.status(201).json(request.body);
}

var findAll = function(request, response) {
    return response.status(200).json(GerenciadorAutorizacaoCadastrarService.findAll());
}

exports.save = save;
exports.findAll = findAll;