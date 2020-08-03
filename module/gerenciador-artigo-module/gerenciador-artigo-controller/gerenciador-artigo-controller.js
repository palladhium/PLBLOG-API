var GerenciadorArtigoService = require("../gerenciador-artigo-service/gerenciador-artigo-service");

var persist = function(request, response) {
    GerenciadorArtigoService.persist(request);
    console.log(request.body);
    return response.status(201).json(request.body);
}

var findAll = function(request, response) {
    GerenciadorArtigoService.findAll(function(ArtigoModel) {
        return response.status(200).json(ArtigoModel);
    }, function(error) {
        return response.status(400).json(error);
    });
}

exports.persist = persist;
exports.findAll = findAll;