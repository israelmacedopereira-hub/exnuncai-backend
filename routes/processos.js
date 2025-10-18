const express = require('express');
const { body, param } = require('express-validator');
const ctrl = require('../controllers/processosController');

const router = express.Router();

/**
 * POST   /processos
 * GET    /processos
 * GET    /processos/:id
 * PUT    /processos/:id
 * DELETE /processos/:id
 */

const createValidators = [
  body('clienteId').trim().notEmpty().withMessage('clienteId é obrigatório'),
  body('numero').trim().notEmpty().withMessage('numero é obrigatório'),
  body('tipo').trim().notEmpty().withMessage('tipo é obrigatório'),
  body('status').trim().notEmpty().withMessage('status é obrigatório'),
  body('historico').optional().isArray().withMessage('historico deve ser um array')
];

const updateValidators = [
  param('id').trim().notEmpty().withMessage('id é obrigatório'),
  body('clienteId').optional().trim(),
  body('numero').optional().trim(),
  body('tipo').optional().trim(),
  body('status').optional().trim(),
  body('historico').optional().isArray().withMessage('historico deve ser um array')
];

router.post('/', createValidators, ctrl.createProcesso);
router.get('/', ctrl.listProcessos);
router.get('/:id', ctrl.getProcesso);
router.put('/:id', updateValidators, ctrl.updateProcesso);
router.delete('/:id', ctrl.deleteProcesso);

module.exports = router;