import * as fs from "fs";
import yargs from "yargs";
import * as path from "path";
import * as Handlebars from "handlebars";

import { Config, DatabaseTasks, toObject, Typings } from "./index";

const args = yargs(process.argv)
  .alias("c", "config")
  .describe("c", "Config file.")
  .demandOption(["c"]).argv;

const configPath = path.join(process.cwd(), args.config as string);

const config = JSON.parse(fs.readFileSync(configPath, "utf8")) as Config;

let outDirPath = path.join(process.cwd(), "generated");
if (typeof config.folder === "string") {
  outDirPath = config.folder;
} else {
  config.folder = outDirPath;
}

let createIndexFile = true;
if (typeof config.createIndexFile === "boolean") {
  createIndexFile = config.createIndexFile;
}

/** Override default template */
const defaultTemplatePath = path.join(
  __dirname,
  "..",
  "templates",
  "interfaces-and-functions.handlebars",
);
if (typeof config.template !== "string") {
  config.template = defaultTemplatePath;
}

/** Create out directory if not exist */
try {
  fs.mkdirSync(outDirPath);
} catch (error) {
  if (error.code !== "EEXIST") {
    console.log(error);
  }
}

(async () => {
  const decoratedDatabase = await toObject(config);

  const { tables } = decoratedDatabase;

  const eachTable = tables.map((el) =>
    // TODO: add enums instead of ignoring it
    DatabaseTasks.stringifyDatabase({ tables: [el], enums: [] }, config),
  );

  eachTable.forEach((el, index) => {
    const filePath = path.join(
      outDirPath,
      `${decoratedDatabase.tables[index].name}.ts`,
    );

    fs.writeFileSync(filePath, el);
  });
  if (createIndexFile) {
    const compiler = Handlebars.compile<{
      tables: Typings.DecoratedTable[];
    }>(`{{#each tables as |table|}}
export * from "./{{table.name}}";
{{/each}}`);
    const indexContent = compiler({ tables: decoratedDatabase.tables });
    const filePath = path.join(outDirPath, `index.ts`);
    fs.writeFileSync(filePath, indexContent);
  }
  console.log(`files written in directory ${outDirPath}`);
})();
