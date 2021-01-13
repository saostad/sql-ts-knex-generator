"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const yargs_1 = __importDefault(require("yargs"));
const path = __importStar(require("path"));
const Handlebars = __importStar(require("handlebars"));
const index_1 = require("./index");
const args = yargs_1.default(process.argv)
    .alias("c", "config")
    .describe("c", "Config file.")
    .demandOption(["c"]).argv;
const configPath = path.join(process.cwd(), args.config);
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
let outDirPath = path.join(process.cwd(), "generated");
if (typeof config.folder === "string") {
    outDirPath = config.folder;
}
else {
    config.folder = outDirPath;
}
let createIndexFile = true;
if (typeof config.createIndexFile === "boolean") {
    createIndexFile = config.createIndexFile;
}
/** Override default template */
const defaultTemplatePath = path.join(__dirname, "..", "templates", "interfaces-and-functions.handlebars");
if (typeof config.template !== "string") {
    config.template = defaultTemplatePath;
}
/** Create out directory if not exist */
try {
    fs.mkdirSync(outDirPath);
    console.log(`${outDirPath} folder has been created.`);
}
catch (error) {
    if (error.code !== "EEXIST") {
        console.log(error);
    }
}
(async () => {
    console.log(`Connecting to db...`);
    const decoratedDatabase = await index_1.toObject(config);
    const { tables } = decoratedDatabase;
    console.log(`Analyzing table's schema...`);
    const eachTable = tables.map((el) => 
    // TODO: add enums instead of ignoring it
    index_1.DatabaseTasks.stringifyDatabase({ tables: [el], enums: [] }, config));
    console.log(`Creating TS files...`);
    eachTable.forEach((el, index) => {
        const filePath = path.join(outDirPath, `${decoratedDatabase.tables[index].name}.ts`);
        fs.writeFileSync(filePath, el);
    });
    if (createIndexFile) {
        const compiler = Handlebars.compile(`{{#each tables as |table|}}
export * from "./{{table.name}}";
{{/each}}`);
        const indexContent = compiler({ tables: decoratedDatabase.tables });
        const filePath = path.join(outDirPath, `index.ts`);
        fs.writeFileSync(filePath, indexContent);
    }
    console.log(`Files written in directory ${outDirPath}`);
    console.log(`You can use "import {} form 'index.ts'"`);
})();
//# sourceMappingURL=cli.js.map