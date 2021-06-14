import { readdir } from "fs";
import { join } from "path";

export class Handler {
    private modules:any = [];
    readonly prefix?: string = process.env.PREFIX
    loadModules(): void {
        const path = join(__dirname, "..", "commands");
        readdir(path, (_, files) => {
            files.forEach(async file => {
                const module = await import(`../commands/${file}`)
                this.modules[file.split(".")[0]] = module[Object.keys(module)[0]];
            })
        })
    }
}