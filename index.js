const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rotas já existentes
const clientesRoutes = require('./routes/clientes');
const leadsRoutes = require('./routes/leads');
app.use('/clientes', clientesRoutes);
app.use('/leads', leadsRoutes);

// 🔥 Novos módulos
const documentosRoutes = require('./routes/documentosRoutes');
const alertasRoutes = require('./routes/alertasRoutes');
const agendaRoutes = require('./routes/agendaRoutes');

app.use('/documentos', documentosRoutes);
app.use('/alertas', alertasRoutes);
app.use('/agenda', agendaRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API ExnuncAi rodando!');
});

// Inicialização do servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

