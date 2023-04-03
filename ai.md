# Structure
```
.
├── src
│   ├── api
│   │   ├── controllers
│   │   │   ├── user.controller.ts
│   │   │   └── ...
│   │   ├── middlewares
│   │   │   ├── auth.middleware.ts
│   │   │   └── ...
│   │   ├── routes
│   │   │   ├── user.routes.ts
│   │   │   └── ...
│   │   └── validators
│   │       ├── user.validator.ts
│   │       └── ...
│   ├── config
│   │   ├── app.config.ts
│   │   ├── database.config.ts
│   │   └── ...
│   ├── core
│   │   ├── errors
│   │   │   ├── base.error.ts
│   │   │   └── ...
│   │   ├── interfaces
│   │   │   ├── user.interface.ts
│   │   │   └── ...
│   │   └── types
│   │       ├── user.type.ts
│   │       └── ...
│   ├── domain
│   │   ├── entities
│   │   │   ├── user.entity.ts
│   │   │   └── ...
│   │   └── repositories
│   │       ├── user.repository.ts
│   │       └── ...
│   ├── infrastructure
│   │   ├── database
│   │   │   ├── connection.ts
│   │   │   ├── models
│   │   │   │   ├── user.model.ts
│   │   │   │   └── ...
│   │   │   └── migrations
│   │   │       ├── 001_create_users_table.ts
│   │   │       └── ...
│   │   └── services
│   │       ├── email.service.ts
│   │       ├── storage.service.ts
│   │       └── ...
│   ├── use_cases
│   │   ├── user
│   │   │   ├── create_user.use_case.ts
│   │   │   └── ...
│   │   └── ...
│   ├── app.ts
│   └── server.ts
├── tests
│   ├── e2e
│   │   └── ...
│   ├── unit
│   │   └── ...
│   └── integration
│       └── ...
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
