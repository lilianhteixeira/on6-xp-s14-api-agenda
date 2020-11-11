const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/ContatoReprograma";

const connect = () =>{
    mongoose.connect(DB_URL, {useNewUrlParser: true});
    const connection = mongoose.connection;

    connection.on("error", () => console.error("Erro ao se conectar ao BD."));
    connection.once("open", () => console.log("Conectamos no Mongo"));

}

module.exports = { connect } //usa chaves pois esta exportando uma função inteira(um arquivo inteiro)

//arquivo repository cria a conexão com nosso banco de dados, nesse caso o MongoDB