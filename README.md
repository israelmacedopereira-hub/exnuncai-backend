# 📚 ExnuncAi Backend  

**PT-BR | 🇧🇷**  
**ExnuncAi** é um **assistente jurídico inteligente** desenvolvido em **Node.js + Express**, que funciona como o **cérebro operacional** de um sistema jurídico digital.  

**EN | 🇺🇸**  
**ExnuncAi** is an **intelligent legal assistant** built with **Node.js + Express**, acting as the **operational brain** of a digital legal system.  

---

## 🧠 O que é / What is ExnuncAi?  

**PT-BR**  
Mais do que um backend, o ExnuncAi é uma **entidade digital** que:  
- Centraliza informações jurídicas (clientes, leads, processos, documentos, finanças)  
- Automatiza rotinas (prazos, cobranças, notificações, documentos)  
- Oferece suporte inteligente com base em dados  
- É extensível, modular e escalável  
- Será interativo (chatbot, painel web, voz)  

**EN**  
More than a backend, ExnuncAi is a **digital entity** that:  
- Centralizes legal information (clients, leads, cases, documents, finances)  
- Automates workflows (deadlines, billing, notifications, documents)  
- Provides intelligent support based on data  
- Is modular, extensible, and scalable  
- Will be interactive (chatbot, web dashboard, voice)  

---

## 🎯 Objetivos / Goals  

**PT-BR**  
- Organizar e unificar a gestão jurídica  
- Automatizar tarefas administrativas e financeiras  
- Fornecer uma API modular para consumo externo  
- Evoluir para ser um **copiloto jurídico digital**  

**EN**  
- Unify and organize legal management  
- Automate administrative and financial tasks  
- Provide a modular API for external consumption  
- Evolve into a **digital legal AI copilot**  

---

## 🏗️ Estrutura / Structure  

```
exnuncai-backend/
├── controllers/   # PT: lógica de negócio / EN: business logic
├── models/        # PT: dados JSON / EN: JSON data persistence
├── routes/        # PT: rotas Express / EN: Express routes
├── data/          # PT: base de dados local / EN: local data storage
├── middlewares/   # PT: validações / EN: validations
├── utils/         # PT: funções auxiliares / EN: helper functions
├── index.js       # PT/EN: entry point
├── package.json   # PT/EN: dependencies & scripts
└── README.md
```

---

## 🧩 Módulos Implementados / Implemented Modules  

**PT-BR**  
- **Clientes** → cadastro, histórico, exclusão  
- **Leads** → registro, conversão em cliente  
- **Processos** → CRUD, histórico, vínculo com cliente  
- **Financeiro** → cobranças, honorários, vencimentos  

**EN**  
- **Clients** → create, update, delete, history  
- **Leads** → register, convert to client  
- **Cases** → CRUD, history, linked to clients  
- **Finance** → billing, fees, due dates  

---

## 🔜 Roadmap  

**PT-BR**  
- 📁 Documentos  
- 🔔 Alertas automáticos  
- 📅 Agenda jurídica  
- 🔗 Integrações externas  
- 🔐 JWT, banco de dados real, painel React, testes automatizados  
- 🤖 Integração com IA para geração de documentos  

**EN**  
- 📁 Documents  
- 🔔 Automated alerts  
- 📅 Legal calendar  
- 🔗 External integrations  
- 🔐 JWT, real database, React dashboard, automated tests  
- 🤖 AI integration for document generation  

---

## 📘 Como executar / How to run  

**PT-BR**  
```bash
npm install
node index.js
# ou
npx nodemon index.js
```
Servidor padrão: [http://localhost:3001](http://localhost:3001)  

**EN**  
```bash
npm install
node index.js
# or
npx nodemon index.js
```
Default server: [http://localhost:3001](http://localhost:3001)  

---

## 👥 Colaboração / Collaboration  

**PT-BR**  
- Branch principal: `main`  
- Branches por módulo: `feature/clientes`, `feature/processos`  
- Commits padronizados: `feat:`, `fix:`, `docs:`, `refactor:`  

**EN**  
- Main branch: `main`  
- Feature branches: `feature/clients`, `feature/cases`  
- Commit conventions: `feat:`, `fix:`, `docs:`, `refactor:`  

📌 Repositório: [github.com/israelmacedopereira-hub/exnuncai-backend](https://github.com/israelmacedopereira-hub/exnuncai-backend)  

---

⚖️ **ExnuncAi** é mais do que código: é a fundação de um **copiloto jurídico de IA** pronto para transformar o mercado jurídico.  
⚖️ **ExnuncAi** is more than code: it’s the foundation of a **legal AI copilot** set to transform the legal industry.  

docs: atualização do README para versão bilíngue PT/EN
