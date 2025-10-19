const express = require("express");
const router = express.Router();
const controller = require("../controllers/documentosController");

router.get("/", controller.getDocumentos);
router.get("/:id", controller.getDocumentoById);
router.post("/", controller.addDocumento);
router.delete("/:id", controller.deleteDocumento);

module.exports = router;