const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let clientes = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao@exemplo.com',
    telefone: '(11) 98765-4321',
    origem: 'Website',
    interesse: 'Consultoria',
    status: 'Novo'
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria@exemplo.com',
    telefone: '(21) 99876-5432',
    origem: 'Indicação',
    interesse: 'Treinamento',
    status: 'Em andamento'
  },
  {
    id: 3,
    nome: 'Pedro Oliveira',
    email: 'pedro@exemplo.com',
    telefone: '(31) 97654-3210',
    origem: 'Redes Sociais',
    interesse: 'Desenvolvimento',
    status: 'Concluído'
  }
];

app.get('/', (req, res) => {
  res.send('ExnuncAi está rodando!');
});

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.post('/clientes', (req, res) => {
  const { nome, email, telefone, origem, interesse, status } = req.body;
  
  const novoCliente = {
    id: clientes.length + 1,
    nome,
    email,
    telefone,
    origem,
    interesse,
    status
  };
  
  clientes.push(novoCliente);
  
  res.status(201).json({
    mensagem: 'Cliente cadastrado com sucesso!',
    cliente: novoCliente
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ExnuncAi rodando na porta ${PORT}`);
});
