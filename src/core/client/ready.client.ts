import * as Discord from 'discord.js';

export class ClientReady {
    client: Discord.Client;
    constructor (client: Discord.Client) {
        this.client = client;
        this.client.login(process.env.TOKEN);
        this.client.on('ready', () => {
            console.log('Logged in as ' + this.client.user?.tag);
            this.client.user?.setActivity(`${process.env.PREFIX}help`, {
                type: 'LISTENING'
            })
        })
    }
}