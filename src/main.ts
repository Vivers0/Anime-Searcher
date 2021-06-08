require('dotenv').config({ path: '../.env' })
import { Client } from "./core/Client";
import { CommandHandler } from "./Handler/CommandHandler";

const client = new Client();
const handler = new CommandHandler(client.client);
// handler.handleMessage();