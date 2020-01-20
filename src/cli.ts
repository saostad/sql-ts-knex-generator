import * as fs from "fs";
import * as yargs from "yargs";
import * as path from "path";
import sqlts, { Config, toObject } from "./index";
import * as DatabaseTasks from "./DatabaseTasks";
import { DecoratedTable } from "./Typings";
import * as Handlebars from "handlebars";

const args = yargs(process.argv)
  .alias("c", "config")
  .describe("c", "Config file.")
  .demandOption(["c"]).argv;

const configPath = path.join(process.cwd(), args.config as string);

const config = JSON.parse(fs.readFileSync(configPath, "utf8")) as Config;
(async () => {
  if (config.separateTableFile) {
    const decoratedDatabase = await toObject(config);

    const eachTable = decoratedDatabase.tables.map(el =>
      DatabaseTasks.stringifyDatabase({ tables: [el] }, config)
    );
    const pathDir = path.join(process.cwd(), "generated");

    /**create directory if not exist */
    try {
      fs.mkdirSync(pathDir);
    } catch (error) {
      if (error.code !== "EEXIST") {
        console.log(error);
      }
    }

    eachTable.forEach((el, index) => {
      const filePath = path.join(
        pathDir,
        `${decoratedDatabase.tables[index].name}.ts`
      );

      fs.writeFileSync(filePath, el);
    });
    if (config.createIndexFile) {
      const compiler = Handlebars.compile<{ tables: DecoratedTable[] }>(
        `{{#each tables as |table|}}
        export * from "./{{table.name}}";
        {{/each}}`
      );
      const indexContent = compiler({ tables: decoratedDatabase.tables });
      const filePath = path.join(pathDir, `index.ts`);
      fs.writeFileSync(filePath, indexContent);
    }
    console.log(`files written in ${pathDir}`);
  } else {
    const output = await sqlts.toTypeScript(config);
    const fileName = `${config.filename || "Database"}.ts`;
    const outFile = path.join(process.cwd(), fileName);
    fs.writeFileSync(outFile, output);
    console.log(`Definition file written as ${outFile}`);
  }
})();
