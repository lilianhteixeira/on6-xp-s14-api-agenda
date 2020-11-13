const express = require("express");
const { route } = require(".");
const router = express.Router();
const controller = require("../controller/contatosController");

router.get("/", controller.getAll);
router.post("/criar", controller.addContato);
router.get("/nome/:nome", controller.getByNome);
router.get("/id/:id", controller.getById);
router.delete("/deletar/:id", controller.deleteContatoById); //deletar pelo id
router.patch("/atualizar/:id", controller.updatePhoneById); //atualizar apenas o telefone
router.put("/atualizar", controller.updateContato); //atualizar o contato completo menos o id

module.exports = router;