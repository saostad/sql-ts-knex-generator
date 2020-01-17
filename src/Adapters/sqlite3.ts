import * as knex from "knex";
import {
  AdapterInterface,
  TableDefinition,
  ColumnDefinition
} from "./AdapterInterface";

export default class implements AdapterInterface {
  async getAllTables(db: knex, schemas: string[]): Promise<TableDefinition[]> {
    const data = await db("sqlite_master")
      .select("tbl_name AS name")
      .whereNot({ tbl_name: "sqlite_sequence" })
      .where({ type: "table" });
    return data.map((t: { name: string }) => ({
      name: t.name,
      schema: "main"
    }));
  }
  async getAllColumns(
    db: knex,
    table: string,
    schema: string
  ): Promise<ColumnDefinition[]> {
    const data = await db.raw(`pragma table_info(${table})`);

    return data.map(
      (c: {
        name: string;
        type: string;
        notnull: number;
        dflt: any;
        pk: number;
      }) => ({
        name: c.name,
        isNullable: c.notnull === 0,
        type: (c.type.includes("(")
          ? c.type.split("(")[0]
          : c.type
        ).toLowerCase(),
        isOptional: c.dflt != null || c.pk == 1
      })
    );
  }
}
