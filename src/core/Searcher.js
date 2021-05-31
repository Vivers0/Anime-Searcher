const { Client } = require("discord.js");
const Handle = require("./handler/Handle");

module.exports = class Searcher extends Handle {
    start() {
        this.login(config.token);
        this.handle();
        this.on('ready', async () => {
            console.log(`Logged in as ${this.user.tag}`);
            console.log(`Working with: ${this.guilds.cache.size} guilds`);
            this.user.setActivity(`${config.prefix}help`, {
                type: 'LISTENING'
            })
        })
    }
}