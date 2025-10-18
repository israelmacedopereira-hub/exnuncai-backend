const fs = require('fs-extra');
const path = require('path');

const clientesFilePath = path.join(__dirname, '../data/clientes.json');

const getAllClientes = async () => {
  try {
    const data = await fs.readJson(clientesFilePath);
    return data;
  } catch (error) {
    console.error('Erro ao ler clientes:', error);
    return [];
  }
};

const createCliente = async (clienteData) => {
  try {
    const clientes = await getAllClientes();
    const novoId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
    
    const novoCliente = {
      id: novoId,
      ...clienteData
    };
    
    clientes.push(novoCliente);
    await fs.writeJson(clientesFilePath, clientes, { spaces: 2 });
    
    return novoCliente;
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    throw error;
  }
};

const getClienteById = async (id) => {
  try {
    const clientes = await getAllClientes();
    return clientes.find(c => c.id === parseInt(id));
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    return null;
  }
};

const updateCliente = async (id, clienteData) => {
  try {
    const clientes = await getAllClientes();
    const index = clientes.findIndex(c => c.id === parseInt(id));
    
    if (index === -1) {
      return null;
    }
    
    clientes[index] = {
      ...clientes[index],
      ...clienteData,
      id: parseInt(id)
    };
    
    await fs.writeJson(clientesFilePath, clientes, { spaces: 2 });
    return clientes[index];
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    throw error;
  }
};

const deleteCliente = async (id) => {
  try {
    const clientes = await getAllClientes();
    const filteredClientes = clientes.filter(c => c.id !== parseInt(id));
    
    if (filteredClientes.length === clientes.length) {
      return false;
    }
    
    await fs.writeJson(clientesFilePath, filteredClientes, { spaces: 2 });
    return true;
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
    throw error;
  }
};

module.exports = {
  getAllClientes,
  createCliente,
  getClienteById,
  updateCliente,
  deleteCliente
};
