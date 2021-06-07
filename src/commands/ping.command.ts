import { Message } from "discord.js";
import { CommandHandler } from "../Handler/CommandHandler";

export class pingCommand extends CommandHandler {
    execute (message: Message) {
        message.channel.send("Pong")
    }
}