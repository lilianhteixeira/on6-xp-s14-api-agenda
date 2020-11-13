const { request, response } = require("express");
const contatoCollections = require("../models/contatoSchema");

const getAll = (request, response) => {
    console.log(request.url); //mostra a requisicao que o usuario fez no terminal

    contatoCollections.find((error, contatos) => {
        if(error){
            return response.status(500).send(error);
        }else{
            return response.status(200).json({
                mensagem: "GET com sucesso.",
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
                mensagem: "POST com sucesso.",
                contato
            });
        }
    });
}

const getByNome = (request, response) => {
    const nome = request.params.nome;

    contatoCollections.find({"nome":nome},(error, nomeContato) => {
        if(error){
            return response.status(500).send(error);
        }else if(nomeContato == ""){
            return response.status(400).send({
                mensagem: "O contato informado não foi encontrado.",
                nomeContato
            });
        }else{
            return response.status(200).send({
                mensagem: "GET pelo nome feito com sucesso.",
                nomeContato
            });
        }
    })
}

const getById = (request, response) => {
    const id = request.params.id;

    contatoCollections.findById(id, (error, contato) => { //a funcao findById(do mongo) pega o os dados ligados ao id passado
        if(error){
            return response.status(500).send(error);
        }else if(contato){
            return response.status(200).send({
                mensagem: "GET pelo id feito com sucesso.",
                contato
            });
        }else{
            return response.status(404).send("O id informado não foi encontrado."); 
        }
    })
}

const deleteContatoById = (request, response) => {
    const id = request.params.id;

    contatoCollections.findByIdAndDelete(id, (error, contatoID)=>{
        if(error){
            return response.status(500).send(error);
        }else if(contatoID){
            return response.status(200).send("Contato deletado com sucesso.");
        }else{
            return response.status(404).send("O contato informado não existe.");
        }
    })
}

const updatePhoneById = (request, response) => {
    const id = request.params.id;
    const celularBody = request.body;
    const update = {new:true}

    contatoCollections.findByIdAndUpdate(
        id, 
        celularBody, 
        update,
        (error,contato)=>{

            if(error) {
                return response.status(500).send(error)
            } else if (contato) {
                return response.status(200).send({
                    mensagem: "Celular atualizado com sucesso.",
                    contato});
            } else {
                return response.status(404).send({mensagem: "O contato não foi encontrado."})
        }
    
    });
}

const updateContato = (request, response) => {
    const id = request.query.id;
    const contatoBody = request.body;
    const update = {new:true}

    contatoCollections.findByIdAndUpdate(
        id,
        contatoBody,
        update,
        (error, contato) => {
            if(error){
                return response.status(500).send({
                    mensagem: "Não foi possível atualizar o contato.",
                    error
                });
            }else{
                return response.status(200).send({
                    mensagem: "Contato atualizado com sucesso.",
                    contato
                });
            }
        }
    );
}

module.exports = {
    getAll,
    addContato,
    getByNome,
    getById,
    deleteContatoById,
    updatePhoneById,
    updateContato
}