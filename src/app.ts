import * as fs from "fs";
import * as path from "path";
import sqlts, { Config, toObject } from "./index";
import * as DatabaseTasks from "./DatabaseTasks";
import { createLogger, writeLog } from "fast-node-logger";
import * as Handlebars from "handlebars";
import { DecoratedTable } from "./Typings";

const config: Config = {
  client: "mssql",
  schemas: ["dbo"],
  interfaceNameFormat: "${table}",
  template: "./dist/templates/interfaces-and-functions.handlebars",
  schemaAsNamespace: false,
  tableAsNamespace: true,
  connection: {
    host: "KISQL03.ki.local",
    user: "api_gateway",
    password: "$2EpPB^I6Gq5*^p4hQPb",
    database: "VP_TS",
    options: {
      enableArithAbort: false
    }
  }
};

async function main() {
  await createLogger();
  const decoratedDatabase = await toObject(config);

  // /**Create Interfaces file */
  // config.template = path.join(__dirname, "templates", "interfaces.handlebars");
  // const intfsFileName = path.join(process.cwd(), "interfaces.ts");
  // const intfsReadyToWrite = DatabaseTasks.stringifyDatabase(
  //   decoratedDatabase,
  //   config
  // );
  // fs.writeFileSync(intfsFileName, intfsReadyToWrite);

  // /**Create Interfaces and Functions */
  // config.template = path.join(
  //   __dirname,
  //   "templates",
  //   "interfaces-and-functions.handlebars"
  // );
  // const intfsAndFuncsFileName = path.join(
  //   process.cwd(),
  //   "interfaces-and-functions.ts"
  // );
  // const intfsAndFuncsReadyToWrite = DatabaseTasks.stringifyDatabase(
  //   decoratedDatabase,
  //   config
  // );
  // fs.writeFileSync(intfsAndFuncsFileName, intfsAndFuncsReadyToWrite);

  /**Create Interface and Functions in separate file */
  config.template = path.join(
    __dirname,
    "templates",
    "interfaces-and-functions.handlebars"
  );
  const eachTable = decoratedDatabase.tables.map(el =>
    DatabaseTasks.stringifyDatabase({ tables: [el] }, config)
  );
  const pathDir = path.join(__dirname, "generated");
  eachTable.forEach((el, index) => {
    const filePath = path.join(
      pathDir,
      `${decoratedDatabase.tables[index].interfaceName}.ts`
    );

    fs.writeFileSync(filePath, el);
  });
  const compiler = Handlebars.compile<{ tables: DecoratedTable[] }>(
    `{{#each tables as |table|}}
    export * from "./{{table.name}}";
    {{/each}}
    `
  );
  const indexContent = compiler({ tables: decoratedDatabase.tables });
  const filePath = path.join(pathDir, `index.ts`);
  fs.writeFileSync(filePath, indexContent);
}
main();
