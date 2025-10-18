# Overview

ExnuncAi is a customer relationship management (CRM) API built with Node.js and Express. The application manages client and lead information including contact details, lead sources, areas of interest, and status tracking. Implemented as a RESTful API with JSON file-based persistent storage using a modular MVC architecture.

**Last Updated**: October 18, 2025 - Restructured to modular architecture with file-based persistence

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Backend Architecture

**Technology Stack**: Node.js 20.x with Express framework

**Design Pattern**: Modular MVC architecture with clear separation of concerns

The application follows a structured pattern with:
- **Routes**: Define API endpoints and map them to controllers
- **Controllers**: Handle request/response logic and business rules
- **Models**: Manage data persistence with JSON file storage
- **Middleware**: Centralized CORS and JSON parsing configuration

**Directory Structure**:
```
/
├── index.js                 # Application entry point
├── routes/                  # Route definitions
│   ├── clientes.js         # Client routes
│   └── leads.js            # Lead routes
├── controllers/            # Business logic
│   ├── clientesController.js
│   └── leadsController.js
├── models/                 # Data access layer
│   ├── clientesModel.js
│   └── leadsModel.js
└── data/                   # JSON data files
    ├── clientes.json
    └── leads.json
```

**Rationale**: The modular structure improves maintainability, testability, and scalability. Clear separation of concerns makes it easier to refactor to a database backend without changing route or controller logic.

**Trade-offs**: 
- Pros: Clear separation of concerns, easy to test, scalable architecture, persistent data storage
- Cons: More files to manage, slight overhead for simple operations, JSON storage not suitable for high-volume production

## Data Model

**Current Implementation**: JSON file-based storage using fs-extra

### Clientes (Clients)
The client data model includes:
- `id`: Auto-incremented unique identifier (number)
- `nome`: Client name (string)
- `email`: Email address (string)
- `telefone`: Phone number with Brazilian format (string)
- `origem`: Lead source (Website, Indicação, Redes Sociais, Email Marketing, LinkedIn)
- `interesse`: Area of interest (Consultoria, Treinamento, Desenvolvimento, Automação)
- `status`: Current stage (Novo, Em andamento, Concluído)

### Leads
The lead data model includes:
- `id`: Auto-incremented unique identifier (number)
- `nome`: Lead name (string)
- `email`: Email address (string)
- `telefone`: Phone number (string)
- `origem`: Lead source (string)
- `interesse`: Area of interest (string)
- `dataRegistro`: ISO timestamp of when lead was created (auto-generated)

**Data Persistence**: All data is automatically saved to JSON files in the `/data` directory. Changes persist across server restarts.

**Future Evolution**: The modular architecture supports easy migration to PostgreSQL, MySQL, or MongoDB by only updating the model layer.

## API Design

### Clientes Endpoints
- `GET /clientes` - List all clients
- `GET /clientes/:id` - Get client by ID
- `POST /clientes` - Create new client
- `PUT /clientes/:id` - Update client
- `DELETE /clientes/:id` - Delete client

### Leads Endpoints
- `GET /leads` - List all leads
- `GET /leads/:id` - Get lead by ID
- `POST /leads` - Create new lead (auto-adds timestamp)
- `PUT /leads/:id` - Update lead
- `DELETE /leads/:id` - Delete lead

### General
- `GET /` - Health check endpoint (returns "API ExnuncAi rodando!")

**API Style**: RESTful conventions with JSON request/response bodies, proper HTTP status codes (200, 201, 404, 500)

**CORS Policy**: Permissive CORS configuration allows cross-origin requests from any domain, suitable for development and frontend integration.

## Application State

**Session Management**: None currently implemented

**Authentication**: No authentication or authorization mechanisms in place

**Rationale**: The minimal security approach suggests this is a development prototype or internal tool. Production deployment would require authentication middleware and proper session management.

# External Dependencies

## NPM Packages

**express**: Web application framework providing routing, middleware support, and HTTP utilities. Core framework for the API.

**cors**: Middleware enabling Cross-Origin Resource Sharing. Required for frontend applications hosted on different domains to communicate with the API.

**fs-extra**: Enhanced file system operations with promise support. Used for reading/writing JSON data files with automatic directory creation.

## Infrastructure Dependencies

**Node.js Runtime**: Application requires Node.js 20.x environment

**Port Configuration**: Configurable via `PORT` environment variable, defaults to 5000

## Recent Changes

**October 18, 2025**: 
- Restructured from monolithic single-file to modular MVC architecture
- Migrated from in-memory storage to JSON file-based persistence using fs-extra
- Added full CRUD operations for both clientes and leads
- Implemented proper error handling with HTTP status codes
- Added auto-incrementing IDs and timestamp tracking for leads

## Known Improvements Needed

1. **Error Handling**: Model layer currently returns empty arrays on read errors, which could mask data corruption. Should surface file read/write failures explicitly.
2. **Input Validation**: No validation on incoming data. Should add validation middleware.
3. **Rate Limiting**: No rate limiting implemented.

## Future Integration Points

Based on the current architecture, likely future integrations include:

- **Database**: PostgreSQL with Sequelize ORM (ready for migration due to modular model layer)
- **Authentication Provider**: JWT-based auth or OAuth integration
- **Frontend Application**: React, Vue, or similar SPA framework
- **Email Service**: For client communication and notifications
- **Input Validation**: Express-validator or Joi for request validation
