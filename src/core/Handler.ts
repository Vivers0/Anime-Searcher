import { Client } from "./Client";
import { readdir } from "fs";
import { join } from "path";

export class Handler {
    modules: any = [];
    loadModules (): void {
        let path = join(__dirname, "..", "commands");
        readdir(path, (_, files) => {
            files.forEach(file => {
                console.log(require(`../commands/${file}`))
                this.modules[file.split(".")[0]] = require(`../commands/${file}`);
            })
        })
    }
}