const fs = require('fs-extra');
const path = require('path');

const leadsFilePath = path.join(__dirname, '../data/leads.json');

const getAllLeads = async () => {
  try {
    const data = await fs.readJson(leadsFilePath);
    return data;
  } catch (error) {
    console.error('Erro ao ler leads:', error);
    return [];
  }
};

const createLead = async (leadData) => {
  try {
    const leads = await getAllLeads();
    const novoId = leads.length > 0 ? Math.max(...leads.map(l => l.id)) + 1 : 1;
    
    const novoLead = {
      id: novoId,
      ...leadData,
      dataRegistro: new Date().toISOString()
    };
    
    leads.push(novoLead);
    await fs.writeJson(leadsFilePath, leads, { spaces: 2 });
    
    return novoLead;
  } catch (error) {
    console.error('Erro ao criar lead:', error);
    throw error;
  }
};

const getLeadById = async (id) => {
  try {
    const leads = await getAllLeads();
    return leads.find(l => l.id === parseInt(id));
  } catch (error) {
    console.error('Erro ao buscar lead:', error);
    return null;
  }
};

const updateLead = async (id, leadData) => {
  try {
    const leads = await getAllLeads();
    const index = leads.findIndex(l => l.id === parseInt(id));
    
    if (index === -1) {
      return null;
    }
    
    leads[index] = {
      ...leads[index],
      ...leadData,
      id: parseInt(id)
    };
    
    await fs.writeJson(leadsFilePath, leads, { spaces: 2 });
    return leads[index];
  } catch (error) {
    console.error('Erro ao atualizar lead:', error);
    throw error;
  }
};

const deleteLead = async (id) => {
  try {
    const leads = await getAllLeads();
    const filteredLeads = leads.filter(l => l.id !== parseInt(id));
    
    if (filteredLeads.length === leads.length) {
      return false;
    }
    
    await fs.writeJson(leadsFilePath, filteredLeads, { spaces: 2 });
    return true;
  } catch (error) {
    console.error('Erro ao deletar lead:', error);
    throw error;
  }
};

module.exports = {
  getAllLeads,
  createLead,
  getLeadById,
  updateLead,
  deleteLead
};
