Backend Structure 
Backend/
│
├── src/
│   ├── api/                      # Entry point for Express and routes
│   │   ├── middlewares/         # Custom middleware (e.g. auth, errorHandler)
│   │   ├── routes/              # Route declarations (REST endpoints)
│   │   ├── controllers/         # Express controllers (thin)
│   │   └── server.js            # Main Express app and Pino HTTP
│
│   ├── application/             # CQRS layer (Commands, Queries, DTOs)
│   │   ├── commands/
│   │   │   └── CreateWebinarCommand.js
│   │   ├── queries/
│   │   └── dtos/
│
│   ├── domain/                  # Domain models and logic
│   │   ├── entities/            # Pure business logic (e.g. Webinar.js)
│   │   └── valueObjects/
│
│   ├── infrastructure/          # External services, DB, logging, config
│   │   ├── db/                  # DB connection and models (e.g. Mongoose)
│   │   ├── repositories/        # Data access layer (WebinarRepository.js)
│   │   ├── logger/              # Pino logger setup
│   │   ├── services/            # 3rd party services (CalendarService.js)
│   │   └── config/              # Central config loader (dotenv/env)
│
│   ├── shared/                  # Utilities, base classes, constants
│   │   ├── base/                # BaseCommand, BaseRepository
│   │   ├── utils/               # helper functions
│   │   └── constants/
│
│   └── index.js                 # Entry point to load and start everything
│
├── tests/                       # Unit/integration tests
│
├── .env
├── package.json
