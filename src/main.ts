import dotenv from 'dotenv';
import { Client } from "./core/client";
import { CommandHandler } from "./handler/command.handler";
dotenv.config({ path: '../.env' });

const client = new Client();
new CommandHandler(client);