# Overview

ExnuncAi is a customer relationship management (CRM) API built with Node.js and Express. The application manages client information including contact details, lead sources, areas of interest, and status tracking. Currently implemented as a RESTful API with in-memory data storage, the system tracks clients through different stages of engagement (Novo, Em andamento, Concluído).

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Backend Architecture

**Technology Stack**: Node.js with Express 5.1.0 framework

**Design Pattern**: RESTful API architecture with a simple MVC-inspired structure

The application follows a straightforward Express server pattern with:
- Centralized middleware configuration (CORS, JSON parsing)
- Route handlers defined directly in the main file
- In-memory data storage using JavaScript arrays

**Rationale**: This architecture prioritizes simplicity and rapid development. For an early-stage CRM application, the monolithic structure in a single file allows for quick iterations without the overhead of complex abstractions.

**Trade-offs**: 
- Pros: Fast development, easy to understand, minimal boilerplate
- Cons: Not production-ready for persistence, difficult to scale, lacks separation of concerns

## Data Model

**Current Implementation**: In-memory array storage

The client data model includes:
- `id`: Unique identifier (number)
- `nome`: Client name (string)
- `email`: Email address (string)
- `telefone`: Phone number with Brazilian format (string)
- `origem`: Lead source (Website, Indicação, Redes Sociais)
- `interesse`: Area of interest (Consultoria, Treinamento, Desenvolvimento)
- `status`: Current stage (Novo, Em andamento, Concluído)

**Expected Evolution**: The architecture anticipates migration to a persistent database solution. The simple object structure is compatible with both SQL and NoSQL databases, making future transitions straightforward.

## API Design

**Endpoints**:
- `GET /`: Health check endpoint
- `GET /clientes`: Retrieve all clients
- `POST /clientes`: Create new client (incomplete implementation)

**API Style**: RESTful conventions with JSON request/response bodies

**CORS Policy**: Permissive CORS configuration allows cross-origin requests from any domain, suitable for development and frontend integration.

## Application State

**Session Management**: None currently implemented

**Authentication**: No authentication or authorization mechanisms in place

**Rationale**: The minimal security approach suggests this is either a development prototype or an internal tool. Production deployment would require authentication middleware and proper session management.

# External Dependencies

## NPM Packages

**express (^5.1.0)**: Web application framework providing routing, middleware support, and HTTP utilities. Chosen for its maturity, extensive ecosystem, and developer familiarity.

**cors (^2.8.5)**: Middleware enabling Cross-Origin Resource Sharing. Required for frontend applications hosted on different domains to communicate with the API.

## Infrastructure Dependencies

**Node.js Runtime**: Application requires Node.js environment (version 18+ based on body-parser dependency requirements)

**Port Configuration**: Configurable via `PORT` environment variable, defaults to 3000

## Future Integration Points

Based on the current architecture, likely future integrations include:

- **Database**: PostgreSQL, MySQL, or MongoDB for persistent storage
- **Authentication Provider**: JWT-based auth or OAuth integration
- **Frontend Application**: React, Vue, or similar SPA framework
- **Email Service**: For client communication and notifications