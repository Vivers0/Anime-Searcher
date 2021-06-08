import * as Discord from 'discord.js'
import { ClientReady } from './client/ready.client';

export class Client {
    client: Discord.Client;
    private ready: ClientReady;
    constructor() {
        this.client = new Discord.Client({
            messageCacheMaxSize: 1,
            messageCacheLifetime: 30,
            messageSweepInterval: 15,
            partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']
        });
        this.ready = new ClientReady(this.client);
    } 
}