const fs = require("fs");
const path = require("path");

const agendaFile = path.join(__dirname, "../data/agenda.json");

function readData() {
  return JSON.parse(fs.readFileSync(agendaFile, "utf8"));
}

function writeData(data) {
  fs.writeFileSync(agendaFile, JSON.stringify(data, null, 2));
}

exports.getEventos = (req, res) => {
  res.json(readData());
};

exports.addEvento = (req, res) => {
  const eventos = readData();
  const novoEvento = {
    id: Date.now(),
    evento: req.body.evento,
    data: req.body.data,
    hora: req.body.hora,
    clienteId: req.body.clienteId || null,
    processoId: req.body.processoId || null,
    status: "agendado"
  };
  eventos.push(novoEvento);
  writeData(eventos);
  res.status(201).json(novoEvento);
};

exports.updateEvento = (req, res) => {
  const eventos = readData();
  const index = eventos.findIndex(e => e.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Evento não encontrado" });

  eventos[index] = { ...eventos[index], ...req.body };
  writeData(eventos);
  res.json(eventos[index]);
};

exports.deleteEvento = (req, res) => {
  let eventos = readData();
  eventos = eventos.filter(e => e.id !== parseInt(req.params.id));
  writeData(eventos);
  res.json({ message: "Evento excluído com sucesso" });
};