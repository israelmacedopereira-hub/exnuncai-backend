const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leadsController');

router.get('/funil', leadsController.visualizarFunil);
router.get('/', leadsController.getLeads);
router.get('/:id', leadsController.getLeadById);
router.post('/', leadsController.createLead);
router.post('/:id/converter', leadsController.converterLead);
router.post('/:id/abordagem', leadsController.gerarAbordagem);
router.put('/:id', leadsController.updateLead);
router.delete('/:id', leadsController.deleteLead);

module.exports = router;
