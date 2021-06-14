import { Message } from "discord.js";
import { Command } from "../core/comamnd";

export class PingCommand extends Command {
    constructor() {
        super();
        this.name = "ping";
        this.description = "ping!";
        this.aliases = ["!p"];
    }
    execute (message: Message): void {
        message.channel.send("Pong")
    }
}