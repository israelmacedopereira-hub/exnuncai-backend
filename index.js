const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const clientesRoutes = require('./routes/clientes');
const leadsRoutes = require('./routes/leads');

app.use('/clientes', clientesRoutes);
app.use('/leads', leadsRoutes);

app.get('/', (req, res) => {
  res.send('API ExnuncAi rodando!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
