var GerenciadorArtigoService = require("../gerenciador-artigo-service/gerenciador-artigo-service");

var save = function(request, response) {
    GerenciadorArtigoService.save(request.body);
    response.status(201).json(request.body);
}

var findAll = function(request, response) {
    return response.status(200).json(GerenciadorArtigoService.findAll());
}

exports.save = save;
exports.findAll = findAll;