var ArtigoModel = require("../gerenciador-artigo-model/gerenciador-artigo-model");

var artigoList = [];
var codigo = 0;

var persist = function(request, response) {
    return ArtigoModel.create(request.body);
}

var findOne = function(request, response) { }

var findAll = function(recuperarArtigoModel, tratarErro) {
    // ArtigoModel = PLBLOG.artigomodels
    ArtigoModel.find().exec(function(ArtigoModel, error) {
        if(!error) {
            recuperarArtigoModel(ArtigoModel);
        } else {
            tratarErro(error);
        }
    });
};

exports.persist = persist;
exports.findAll = findAll;
exports.findOne = findOne;