# A simple command line tool to generate typescript CRUD operations

Generate CRUD operations and TypeScript interfaces from database schemas.

Supports the following databases: MySQL, Microsoft SQL Server, SQLite and PostgreSQL.

## How to use

`npx sql-ts-knex-generator -c ./config.json`

### example config file:

```json
{
  "client": "mssql",
  "tables": ["dbo.TABLE_NAME"],
  "connection": {
    "server": "********",
    "database": "*******",
    "user": "*******",
    "password": "********",
    "options": {
      "encrypt": true,
      "enableArithAbort": true
    },
    "requestTimeout": 15000,
    "connectionTimeout": 15000
  }
}
```

It will create a folder and generate a file for each table containing CRUD (create, read, update, delete) functions based on DB schema.

It respects nullable and required fields.

## Config file options

[Config file options](https://saostad.github.io/sql-ts-knex-generator/interfaces/config.html)
OR
[sql-ts docs](https://github.com/rmp135/sql-ts#config)

### Credits:

- [sql-ts](https://github.com/rmp135/sql-ts)
- [knex](https://github.com/knex/knex)
