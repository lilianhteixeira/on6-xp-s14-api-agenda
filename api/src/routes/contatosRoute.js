const express = require("express");
const { route } = require(".");
const router = express.Router();
const controller = require("../controller/contatosController");

router.get("/", controller.getAll);
router.post("/criar", controller.addContato);

module.exports = router;