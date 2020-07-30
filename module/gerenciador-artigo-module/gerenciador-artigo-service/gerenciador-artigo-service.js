var artigoList = [];
var codigo = 0;

var save = function(ArtigoModel) {
    codigo++;
    ArtigoModel.codigo = codigo;
    artigoList.push(ArtigoModel);
}

var findAll = function() {
    return artigoList;
};

exports.save = save;
exports.findAll = findAll;