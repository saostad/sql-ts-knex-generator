import * as fs from "fs";
import * as yargs from "yargs";
import * as path from "path";
import sqlts, { Config, toObject } from "./index";
import * as DatabaseTasks from "./DatabaseTasks";
import { DecoratedTable } from "./Typings";

const args = yargs(process.argv)
  .alias("c", "config")
  .describe("c", "Config file.")
  .demandOption(["c"]).argv;

const configPath = path.join(process.cwd(), args.config as string);

const config = JSON.parse(fs.readFileSync(configPath, "utf8")) as Config;
(async () => {
  if (config.separateTableFile) {
    const decoratedDatabase = await toObject(config);

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
      {{/each}}`
    );
    const indexContent = compiler({ tables: decoratedDatabase.tables });
    const filePath = path.join(pathDir, `index.ts`);
    fs.writeFileSync(filePath, indexContent);
    console.log(`files written in ${pathDir}`);
  } else {
    const output = await sqlts.toTypeScript(config);
    const fileName = `${config.filename || "Database"}.ts`;
    const outFile = path.join(process.cwd(), fileName);
    fs.writeFileSync(outFile, output);
    console.log(`Definition file written as ${outFile}`);
  }
})();
