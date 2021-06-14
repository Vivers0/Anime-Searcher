import { Client, Message } from "discord.js";
import { Command } from "../core/comamnd";
import { readdir } from 'fs';
import { join } from 'path';

export class CommandHandler {
    private commands = [] as Command[];
    client: Client;
    
    constructor(client: Client) {
        this.loadCommands();
        this.client = client;
        this.client.on('message', msg => this.handleMessage(msg));
    }

    loadCommands(): void {
        const path = join(__dirname, "..", "commands");
        readdir(path, (_, files) => {
            files.forEach(async file => {
                const module = await import(`../commands/${file}`)
                this.commands[file.split(".")[0]] = module[Object.keys(module)[0]];
            })
        })
    }
    handleMessage(message: Message): void {
        if (message.author.bot) return;
        const cmd = message.content.split(' ')[0].toLowerCase();
        if (Object.keys(this.commands).includes(cmd)) {
            message.channel.startTyping();
            this.commands[cmd].prototype.execute(message);
        }
    }
}