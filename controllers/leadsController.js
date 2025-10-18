const leadsModel = require('../models/leadsModel');

const getLeads = async (req, res) => {
  try {
    const leads = await leadsModel.getAllLeads();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar leads' });
  }
};

const getLeadById = async (req, res) => {
  try {
    const lead = await leadsModel.getLeadById(req.params.id);
    if (!lead) {
      return res.status(404).json({ erro: 'Lead não encontrado' });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar lead' });
  }
};

const createLead = async (req, res) => {
  try {
    const { nome, email, telefone, origem, interesse } = req.body;
    
    const novoLead = await leadsModel.createLead({
      nome,
      email,
      telefone,
      origem,
      interesse
    });
    
    res.status(201).json({
      mensagem: 'Lead cadastrado com sucesso!',
      lead: novoLead
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar lead' });
  }
};

const updateLead = async (req, res) => {
  try {
    const leadAtualizado = await leadsModel.updateLead(req.params.id, req.body);
    
    if (!leadAtualizado) {
      return res.status(404).json({ erro: 'Lead não encontrado' });
    }
    
    res.json({
      mensagem: 'Lead atualizado com sucesso!',
      lead: leadAtualizado
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar lead' });
  }
};

const deleteLead = async (req, res) => {
  try {
    const deletado = await leadsModel.deleteLead(req.params.id);
    
    if (!deletado) {
      return res.status(404).json({ erro: 'Lead não encontrado' });
    }
    
    res.json({ mensagem: 'Lead deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar lead' });
  }
};

module.exports = {
  getLeads,
  getLeadById,
  createLead,
  updateLead,
  deleteLead
};
