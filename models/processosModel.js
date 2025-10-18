const fs = require('fs-extra');
const path = require('path');
const { randomUUID } = require('crypto');

const DATA_PATH = path.join(__dirname, '..', 'data', 'processos.json');

async function readData() {
  try {
    return await fs.readJson(DATA_PATH);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeData(data) {
  await fs.ensureDir(path.dirname(DATA_PATH));
  await fs.writeJson(DATA_PATH, data, { spaces: 2 });
}

async function getAllProcessos() {
  return await readData();
}

async function getProcessoById(id) {
  const all = await readData();
  return all.find(p => p.id === id) || null;
}

async function createProcesso({ clienteId, numero, tipo, status, historico = [] }) {
  const all = await readData();
  const novo = {
    id: randomUUID(),
    clienteId,
    numero,
    tipo,
    status,
    historico: Array.isArray(historico) ? historico : []
  };
  all.push(novo);
  await writeData(all);
  return novo;
}

async function updateProcesso(id, updates) {
  const all = await readData();
  const idx = all.findIndex(p => p.id === id);
  if (idx === -1) return null;
  const existente = all[idx];
  const atualizado = {
    ...existente,
    ...updates,
    historico: updates.historico !== undefined
      ? (Array.isArray(updates.historico) ? updates.historico : existente.historico)
      : existente.historico
  };
  all[idx] = atualizado;
  await writeData(all);
  return atualizado;
}

async function deleteProcesso(id) {
  const all = await readData();
  const idx = all.findIndex(p => p.id === id);
  if (idx === -1) return false;
  all.splice(idx, 1);
  await writeData(all);
  return true;
}

module.exports = {
  getAllProcessos,
  getProcessoById,
  createProcesso,
  updateProcesso,
  deleteProcesso
};