const express = require("express");
const router = express.Router();
const controller = require("../controllers/agendaController");

router.get("/", controller.getEventos);
router.post("/", controller.addEvento);
router.put("/:id", controller.updateEvento);
router.delete("/:id", controller.deleteEvento);

module.exports = router;