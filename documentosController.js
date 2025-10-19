const fs = require("fs");
const path = require("path");

const documentosFile = path.join(__dirname, "../data/documentos.json");

function readData() {
  return JSON.parse(fs.readFileSync(documentosFile, "utf8"));
}

function writeData(data) {
  fs.writeFileSync(documentosFile, JSON.stringify(data, null, 2));
}

exports.getDocumentos = (req, res) => {
  res.json(readData());
};

exports.getDocumentoById = (req, res) => {
  const documentos = readData();
  const documento = documentos.find(d => d.id === parseInt(req.params.id));
  documento ? res.json(documento) : res.status(404).json({ error: "Documento não encontrado" });
};

exports.addDocumento = (req, res) => {
  const documentos = readData();
  const novoDocumento = {
    id: Date.now(),
    nome: req.body.nome,
    tipo: req.body.tipo,
    clienteId: req.body.clienteId || null,
    processoId: req.body.processoId || null,
    dataUpload: new Date().toISOString()
  };
  documentos.push(novoDocumento);
  writeData(documentos);
  res.status(201).json(novoDocumento);
};

exports.deleteDocumento = (req, res) => {
  let documentos = readData();
  documentos = documentos.filter(d => d.id !== parseInt(req.params.id));
  writeData(documentos);
  res.json({ message: "Documento excluído com sucesso" });
};