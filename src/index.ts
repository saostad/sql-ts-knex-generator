import sqlts, { Config as OriginalConfig } from "@rmp135/sql-ts";

export * as DatabaseTasks from "@rmp135/sql-ts/dist/DatabaseTasks";
export * as Typings from "@rmp135/sql-ts/dist/Typings";
export * from "@rmp135/sql-ts";
export default sqlts;

export interface Config extends OriginalConfig {
  /** @default true */
  createIndexFile?: boolean;
}
