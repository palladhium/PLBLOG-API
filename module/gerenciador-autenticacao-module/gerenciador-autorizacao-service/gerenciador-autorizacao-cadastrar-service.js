var usuarioList = [];
var codigo = 0;

var save = function(UsuarioModel) {
    codigo++;
    UsuarioModel.codigo = codigo;
    // console.log(UsuarioModel);
    usuarioList.push(UsuarioModel);
}

exports.save = save;