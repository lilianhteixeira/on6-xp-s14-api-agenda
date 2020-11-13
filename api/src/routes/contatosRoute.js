const express = require("express");
const { route } = require(".");
const router = express.Router();
const controller = require("../controller/contatosController");

router.get("/", controller.getAll);
router.post("/criar", controller.addContato);
router.get("/nome/:nome", controller.getByNome);
router.get("/id/:id", controller.getById);
router.delete("/deletar/:id", controller.deleteContatoById); //deletar pelo id
router.put("/atualizar/telefone/:id",); //atualizar apenas o telefone
router.patch("atualizar/:id",); //atualizar o contato completo menos o id

module.exports = router;