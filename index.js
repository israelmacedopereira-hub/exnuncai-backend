const express = require('express');
const app = express();

app.use(express.json());

// Dados simulados
const clientes = [];
const leads = [];
const leadsRed = [];
const leadsGreen = [];
const atendimentos = [];

// Rota de teste
app.get('/', (req, res) => {
  res.send('ExnuncAi está rodando!');
});

// CLIENTES

// POST /clientes - Cadastra cliente
app.post('/clientes', (req, res) => {
  const { nome, idade, telefone, origem, interesse } = req.body;
  const novoCliente = { nome, idade, telefone, origem, interesse };
  clientes.push(novoCliente);
  res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso!', cliente: novoCliente });
});

// GET /clientes - Lista todos os clientes
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// GET /clientes/:nome - Busca cliente por nome
app.get('/clientes/:nome', (req, res) => {
  const nomeBuscado = req.params.nome.toLowerCase();
  const clienteEncontrado = clientes.find(c => c.nome.toLowerCase() === nomeBuscado);
  if (clienteEncontrado) {
    res.json(clienteEncontrado);
  } else {
    res.status(404).json({ mensagem: 'Cliente não encontrado' });
  }
});

// LEADS

// POST /leads - Cadastra lead
app.post('/leads', (req, res) => {
  const lead = req.body;
  leads.push(lead);
  if (lead.origem === 'vermelho') {
    leadsRed.push(lead);
  } else {
    leadsGreen.push(lead);
  }
  res.status(201).json({ mensagem: 'Lead registrado com sucesso!', lead });
});

// GET /leads - Lista todos os leads
app.get('/leads', (req, res) => {
  res.json(leads);
});

// GET /leads/vermelhos - Lista leads vermelhos
app.get('/leads/vermelhos', (req, res) => {
  res.json(leadsRed);
});

// GET /leads/verdes - Lista leads verdes
app.get('/leads/verdes', (req, res) => {
  res.json(leadsGreen);
});

// ATENDIMENTOS

// POST /atendimentos - Registra atendimento
app.post('/atendimentos', (req, res) => {
  const atendimento = req.body;
  atendimentos.push(atendimento);
  res.status(201).json({ mensagem: 'Atendimento registrado!', atendimento });
});

// GET /atendimentos - Lista todos os atendimentos
app.get('/atendimentos', (req, res) => {
  res.json(atendimentos);
});

// GET /atendimentos/:cliente - Lista atendimentos por cliente
app.get('/atendimentos/:cliente', (req, res) => {
  const clienteNome = req.params.cliente.toLowerCase();
  const historico = atendimentos.filter(a => a.cliente.toLowerCase() === clienteNome);
  if (historico.length > 0) {
    res.json(historico);
  } else {
    res.status(404).json({ mensagem: 'Nenhum atendimento encontrado para este cliente' });
  }
});

// INICIAR SERVIDOR
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor do ExnuncAi rodando na porta ${PORT}`);
});
