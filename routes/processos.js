const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/processosController');
const validators = require('../validators/processoValidator');

// Middleware simples para checar id param
function requireIdParam(req, res, next) {
  if (!req.params || !req.params.id || String(req.params.id).trim() === '') {
    return res.status(400).json({ error: 'Parâmetro id é obrigatório' });
  }
  next();
}

/**
 * POST   /processos
 * GET    /processos
 * GET    /processos/:id
 * PUT    /processos/:id
 * DELETE /processos/:id
 */

router.post('/', validators.validateCreate, ctrl.createProcesso);
router.get('/', ctrl.listProcessos);
router.get('/:id', requireIdParam, ctrl.getProcesso);
router.put('/:id', requireIdParam, validators.validateUpdate, ctrl.updateProcesso);
router.delete('/:id', requireIdParam, ctrl.deleteProcesso);

module.exports = router;