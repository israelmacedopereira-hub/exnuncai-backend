const clientesModel = require('../models/clientesModel');

const getClientes = async (req, res) => {
  try {
    const clientes = await clientesModel.getAllClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar clientes' });
  }
};

const getClienteById = async (req, res) => {
  try {
    const cliente = await clientesModel.getClienteById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar cliente' });
  }
};

const createCliente = async (req, res) => {
  try {
    const { nome, email, telefone, origem, interesse, status } = req.body;
    
    const novoCliente = await clientesModel.createCliente({
      nome,
      email,
      telefone,
      origem,
      interesse,
      status
    });
    
    res.status(201).json({
      mensagem: 'Cliente cadastrado com sucesso!',
      cliente: novoCliente
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar cliente' });
  }
};

const updateCliente = async (req, res) => {
  try {
    const clienteAtualizado = await clientesModel.updateCliente(req.params.id, req.body);
    
    if (!clienteAtualizado) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    
    res.json({
      mensagem: 'Cliente atualizado com sucesso!',
      cliente: clienteAtualizado
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar cliente' });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const deletado = await clientesModel.deleteCliente(req.params.id);
    
    if (!deletado) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    
    res.json({ mensagem: 'Cliente deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar cliente' });
  }
};

module.exports = {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente
};
