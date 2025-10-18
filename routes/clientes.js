const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.getClientes);
router.get('/:id', clientesController.getClienteById);
router.get('/:id/historico', clientesController.getHistorico);
router.post('/', clientesController.createCliente);
router.post('/:id/alerta', clientesController.createAlerta);
router.put('/:id', clientesController.updateCliente);
router.delete('/:id', clientesController.deleteCliente);

module.exports = router;
