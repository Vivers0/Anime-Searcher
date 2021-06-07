import { Client } from "discord.js";
import { Handler } from "../core/Handler";

export class CommandHandler extends Handler {
    client: Client;
    constructor(client: Client | any) {
        super();
        this.loadModules();
        this.client = client;
    }
    handleMessage() {
        this.client.on('message', message => {
            if (message.author.bot) return;
            //let msg = msg.content.toLocaleLowerCase();
            let cmd = message.content.split(' ')[0]
            if (Object.keys(this.modules).includes(cmd)) {
                message.channel.startTyping();
                let key = Object.keys(this.modules[Object.keys(this.modules)[Object.keys(this.modules).indexOf(cmd)]])[0]
                this.modules[Object.keys(this.modules)[Object.keys(this.modules).indexOf(cmd)]][key].prototype.execute(message);
            }
        })
    }
}