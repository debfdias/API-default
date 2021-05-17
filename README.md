# API-default
A generic API in Node JS, built with MVC pattern. User authentication with JWT and PostgreSQL as database.

Install dependencies:
- yarn

Edit .env file with DB credentials

- DB_URL=postgres://postgres:root@localhost:5433/db

Run migrations:
- npx sequelize:db migrate

Run seeds:
- npx sequelize db:seed:all

Run server:
- yarn dev

