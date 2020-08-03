var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArtigoSchema = new Schema ({
    titulo: { type: String, required: true },
    conteudo: { type: String, required: true },
    autor: { type: String, required: true }
});

var ArtigoModel = mongoose.model("ArtigoModel", ArtigoSchema);

module.exports = ArtigoModel;