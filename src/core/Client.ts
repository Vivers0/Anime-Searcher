import * as Discord from 'discord.js'
import { ClientReady } from './client/ready.client';

export class Client extends Discord.Client {
    //client: Discord.Client;
    ready: ClientReady;
    constructor() {
        super({
            messageCacheMaxSize: 1,
            messageCacheLifetime: 30,
            messageSweepInterval: 15,
            partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']
        })
        // this.client = new Discord.Client();
        this.ready = new ClientReady(this);
    } 
}