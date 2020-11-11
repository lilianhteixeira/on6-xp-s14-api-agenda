const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contatoSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo de dado de id
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    celular: {
        type: String, //quando estamos usando numeros e não vamos fazer conta com eles, pode deixar no formato string
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    fotoPerfil: {
        type: String,
        required: false
    }
});

const contatoCollections = mongoose.model("contato", contatoSchema);
module.exports = contatoCollections;