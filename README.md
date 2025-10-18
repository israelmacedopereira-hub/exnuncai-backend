# ExnuncAi

Backend jurídico em Node.js + Express para gestão de clientes, leads e processos. Persistência atual em arquivos JSON (data/).

## Descrição
ExnuncAi é modular (routes, controllers, models) e projetado para fácil migração para banco de dados relacional/NoSQL no futuro.

## Instalação
1. Node.js (recomendado 18+)
2. No diretório do projeto:
```bash
npm install
npm install fs-extra express-validator
```

## Execução
```bash
PORT=5000 node index.js
# ou
npm start
```

Abra: "$BROWSER" http://localhost:5000

## Endpoints do módulo Processos
- POST /processos
  - body: { clienteId, numero, tipo, status, historico? }
- GET /processos
- GET /processos/:id
- PUT /processos/:id
- DELETE /processos/:id

## Estrutura de diretórios
- controllers/
- models/
- routes/
- data/
- middlewares/
- index.js

## Módulos implementados
- clientes (CRUD + histórico)
- leads (CRUD + conversão)
- processos (CRUD + histórico) — persistência em data/processos.json

## Boas práticas Git
- Conventional Commits (feat, fix, docs, chore, test, ci, refactor)
- SemVer (MAJOR.MINOR.PATCH)