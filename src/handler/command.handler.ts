import { Client, Message } from "discord.js";
import { Handler } from "../core/handler";

export class CommandHandler extends Handler {
    client: Client;
    
    constructor(client: Client) {
        super();
        this.loadModules();
        this.client = client;
        this.client.on('message', msg => this.handleMessage(msg));
    }
    handleMessage(message: Message): void {
        if (message.author.bot) return;
        //let msg = msg.content.toLocaleLowerCase();
        const cmd = message.content.split(' ')[0]
        if (Object.keys(this.modules).includes(cmd)) {
            // message.channel.startTyping();
            this.modules[cmd].prototype.execute(message);
        }
    }
}