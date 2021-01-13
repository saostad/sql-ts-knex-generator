# A simple command line tool to generate typescript CRUD operations

Generate CRUD operations and TypeScript interfaces from database schemas.

Supports the following databases: MySQL, Microsoft SQL Server, SQLite and PostgreSQL.

## How to use

`npx sql-ts-knex-generator -c ./config.json`

It will create a folder and generate a file for each table containing CRUD (create, read, update, delete) functions based on DB schema.

It respects nullable and required fields.

## Config file options

[Config file options](https://saostad.github.io/sql-ts-knex-generator/interfaces/config.html)
OR
[sql-ts docs](https://github.com/rmp135/sql-ts#config)

### Credits:

- [sql-ts](https://github.com/rmp135/sql-ts)
- [knex](https://github.com/knex/knex)
