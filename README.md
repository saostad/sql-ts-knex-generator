# A simple command line tool to generate typescript CRUD operations

Generate CRUD operations and TypeScript interfaces from database schemas.

Supports the following databases: MySQL, Microsoft SQL Server, SQLite and PostgreSQL.

## Installation

`npx sql-ts-knex-generator -c ./config.json`

## Note:

Install your relevant SQL driver. Refer to the knex documentation to determine which driver you should install.

For example `npm install -g mssql`.

## Config file options

[Config file options](https://github.com/rmp135/sql-ts#config)

### Credits:

- [sql-ts](https://github.com/rmp135/sql-ts)
- [knex](https://github.com/knex/knex)
