import * as Discord from 'discord.js'

export class Client {
    client: Discord.Client = new Discord.Client();
    constructor() {
        this.client.login("NjE1MjEzMTgyOTg1ODMwNjQz.XWKv7A.v3C3edwrwXUHS-2LA__2tIyKCmY");
        this.client.on('ready', () => console.log("Ready!"));
    }
    get init() {
        return this.client;
    }
}