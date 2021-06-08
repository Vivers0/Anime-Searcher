import * as Discord from 'discord.js'
import { ClientReady } from './client/ready.client';

export class Client {
    client: Discord.Client;
    private ready: ClientReady;
    constructor() {
        this.client = new Discord.Client();
        this.ready = new ClientReady(this.client);
    }
}