const { validationResult } = require('express-validator');
const model = require('../models/processosModel');

async function listProcessos(req, res) {
  try {
    const processos = await model.getAllProcessos();
    return res.json(processos);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar processos' });
  }
}

async function createProcesso(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { clienteId, numero, tipo, status, historico } = req.body;
    const novo = await model.createProcesso({ clienteId, numero, tipo, status, historico });
    return res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar processo' });
  }
}

async function updateProcesso(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { id } = req.params;
    const updates = req.body;
    const atualizado = await model.updateProcesso(id, updates);
    if (!atualizado) return res.status(404).json({ error: 'Processo não encontrado' });
    return res.json(atualizado);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar processo' });
  }
}

async function deleteProcesso(req, res) {
  try {
    const { id } = req.params;
    const removed = await model.deleteProcesso(id);
    if (!removed) return res.status(404).json({ error: 'Processo não encontrado' });
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao deletar processo' });
  }
}

async function getProcesso(req, res) {
  try {
    const { id } = req.params;
    const processo = await model.getProcessoById(id);
    if (!processo) return res.status(404).json({ error: 'Processo não encontrado' });
    return res.json(processo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar processo' });
  }
}

module.exports = {
  listProcessos,
  getProcesso,
  createProcesso,
  updateProcesso,
  deleteProcesso
};