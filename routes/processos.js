const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const ctrl = require('../controllers/processosController');

const createValidators = [
  body('clienteId').trim().notEmpty().withMessage('clienteId é obrigatório'),
  body('numero').trim().notEmpty().withMessage('numero é obrigatório'),
  body('tipo').trim().notEmpty().withMessage('tipo é obrigatório'),
  body('status').trim().notEmpty().withMessage('status é obrigatório'),
  body('historico').optional().isArray().withMessage('historico deve ser um array')
];

const idParam = [
  param('id').trim().notEmpty().withMessage('id é obrigatório')
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
router.get('/:id', idParam, ctrl.getProcesso);
router.put('/:id', updateValidators, ctrl.updateProcesso);
router.delete('/:id', idParam, ctrl.deleteProcesso);

module.exports = router;