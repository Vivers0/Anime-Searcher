const { Client } = require("discord.js");
const fs = require("fs");

module.exports = class Handler extends Client {
    constructor () {
        super ({
            messageCacheMaxSize: 1,
            messageCacheLifetime: 30,
            messageSweepInterval: 15,
            partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']
        })
        this.modules = new Object();
        
    }

    handler () {
        fs.readdir('./modules/commands/', (_, files) => {
            files.map(file => {
                if (file.split('.')[1] !== 'js') return
                this.modules[config.prefix + file.split('.')[0]] = require(`./modules/commands/${file}`);
                console.log(`${file} was successfully loaded!`);
            })
        })
    }
}