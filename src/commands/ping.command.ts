import { Message } from "discord.js";

export class PingCommand {
    execute (message: Message): void {
        message.channel.send("Pong")
    }
}