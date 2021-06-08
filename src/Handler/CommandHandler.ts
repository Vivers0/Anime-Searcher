import { Client, Message } from "discord.js";
import { Handler } from "../core/Handler";

export class CommandHandler extends Handler {
    client: Client;
    
    constructor(client: Client | any) {
        super();
        this.loadModules();
        this.client = client;
        this.client.on('message', msg => this.handleMessage(msg));
    }
    handleMessage(message: Message) {
        if (message.author.bot) return;
        //let msg = msg.content.toLocaleLowerCase();
        let cmd = message.content.split(' ')[0]
        if (Object.keys(this.modules).includes(cmd)) {
            message.channel.startTyping();
            const key = Object.keys(this.modules[Object.keys(this.modules)[Object.keys(this.modules).indexOf(cmd)]])[0];
            const command = Object.keys(this.modules)[Object.keys(this.modules).indexOf(cmd)];
            this.modules[command][key].prototype.execute(message);
        }
    }
}