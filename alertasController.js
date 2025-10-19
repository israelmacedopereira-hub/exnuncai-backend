const fs = require("fs");
const path = require("path");

const alertasFile = path.join(__dirname, "../data/alertas.json");

function readData() {
  return JSON.parse(fs.readFileSync(alertasFile, "utf8"));
}

function writeData(data) {
  fs.writeFileSync(alertasFile, JSON.stringify(data, null, 2));
}

exports.getAlertas = (req, res) => {
  res.json(readData());
};

exports.addAlerta = (req, res) => {
  const alertas = readData();
  const novoAlerta = {
    id: Date.now(),
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    dataAlerta: req.body.dataAlerta,
    tipo: req.body.tipo,
    status: "pendente"
  };
  alertas.push(novoAlerta);
  writeData(alertas);
  res.status(201).json(novoAlerta);
};

exports.updateAlerta = (req, res) => {
  const alertas = readData();
  const index = alertas.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Alerta não encontrado" });

  alertas[index] = { ...alertas[index], ...req.body };
  writeData(alertas);
  res.json(alertas[index]);
};

exports.deleteAlerta = (req, res) => {
  let alertas = readData();
  alertas = alertas.filter(a => a.id !== parseInt(req.params.id));
  writeData(alertas);
  res.json({ message: "Alerta excluído com sucesso" });
};