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
      interesse,
      status: 'captado'
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

const converterLead = async (req, res) => {
  try {
    const leadConvertido = await leadsModel.updateLead(req.params.id, { status: 'convertido' });
    
    if (!leadConvertido) {
      return res.status(404).json({ erro: 'Lead não encontrado' });
    }
    
    res.json({
      mensagem: 'Lead convertido em cliente com sucesso!',
      lead: leadConvertido
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao converter lead' });
  }
};

const visualizarFunil = async (req, res) => {
  try {
    const leads = await leadsModel.getAllLeads();
    
    const funil = {
      captado: leads.filter(l => l.status === 'captado'),
      qualificado: leads.filter(l => l.status === 'qualificado'),
      convertido: leads.filter(l => l.status === 'convertido')
    };
    
    res.json({
      funil,
      resumo: {
        totalCaptado: funil.captado.length,
        totalQualificado: funil.qualificado.length,
        totalConvertido: funil.convertido.length,
        total: leads.length
      }
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao visualizar funil' });
  }
};

const gerarAbordagem = async (req, res) => {
  try {
    const lead = await leadsModel.getLeadById(req.params.id);
    
    if (!lead) {
      return res.status(404).json({ erro: 'Lead não encontrado' });
    }
    
    const sugestao = `Abordagem sugerida para ${lead.nome}: Estratégia consultiva focada em ${lead.interesse}, considerando que a origem é ${lead.origem}. Priorize demonstrar valor e construir relacionamento.`;
    
    res.json({
      mensagem: 'Abordagem gerada com sucesso!',
      lead: {
        nome: lead.nome,
        interesse: lead.interesse,
        origem: lead.origem
      },
      sugestao
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao gerar abordagem' });
  }
};

module.exports = {
  getLeads,
  getLeadById,
  createLead,
  updateLead,
  deleteLead,
  converterLead,
  visualizarFunil,
  gerarAbordagem
};
