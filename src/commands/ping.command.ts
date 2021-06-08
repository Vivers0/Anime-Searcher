import { Message } from "discord.js";
import { CommandHandler } from "../Handler/CommandHandler";

export class PingCommand extends CommandHandler {
    execute (message: Message) {
        message.channel.send("Pong")
    }
}