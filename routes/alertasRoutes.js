const express = require("express");
const router = express.Router();
const controller = require("../controllers/alertasController");

router.get("/", controller.getAlertas);
router.post("/", controller.addAlerta);
router.put("/:id", controller.updateAlerta);
router.delete("/:id", controller.deleteAlerta);

module.exports = router;