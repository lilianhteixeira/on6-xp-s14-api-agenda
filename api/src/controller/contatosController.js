const { request, response } = require("express");
const contatoCollections = require("../models/contatoSchema");

const getAll = (request, response) => {
    console.log(request.url); //mostra a requisicao que o usuario fez no terminal

    contatoCollections.find((error, contatos) => {
        if(error){
            return response.status(500).send(error);
        }else{
            return response.status(200).json({
                mensagem: "GET com sucesso",
                contatos
            })
        }
    });
}

const addContato = (request, response) => {
    const contatoDoBody = request.body; //pegando o body que o usuario digitou(get body)
    const contato = new contatoCollections(contatoDoBody); //criando um novo dado com o body

    contato.save((error) => {
        if(error){
            return response.status(400).send(error);
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso",
                contato
            });
        }
    });
}

module.exports = {
    getAll,
    addContato
}