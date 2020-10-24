﻿const Mongodb = require('./modules/mongo');
const config = require('./config.js');
const seach = require('./modules/commands/search');

const Discord = require('discord.js');
const fs = require('fs');
const DBL = require("dblapi.js");

const db = new Mongodb(config.mongodb_uri);
const client = new Discord.Client();
const dbl = new DBL(config.topgg_token, client);

const modules = {};

dbl.on('posted', () => {
    console.log('Server count posted!');
})

client.login(config.token);

const gc = (client) => { // Still not sure if it optimize memory usage
    client.guilds.cache.forEach(guild => {
        guild.emojis.cache.clear();
        guild.members.cache.clear();
        guild.roles.cache.clear();
    })
}

client.on('ready', async () => {
    setInterval(()=>{ 
        gc(client)
    }, 5 * 60 * 1000)
    console.log(`Logged in as ${client.user.tag}`);
    console.log(`Working with: ${client.guilds.cache.size} guilds`);

    client.user.setActivity('+setchannel', {
        type: 'LISTENING'
    })
    try {
        fs.readdir('./modules/commands/', (err, files) => {
            files.map(file => {
                if (file.split('.')[1] !== 'js') return
                modules[config.prefix + file.split('.')[0]] = require(`./modules/commands/${file}`);
                console.log(`${file} was successfully loaded!`);
            })
        })
    } catch (e) {
        console.log(e);
    }
})

client.on('message', async (msg) => {
    if (msg.author.bot) return
    let message = msg.content.toLocaleLowerCase();
    try {
        let cmd = message.split(' ')[0]
        if (Object.keys(modules).includes(cmd)) {
            msg.channel.startTyping();
            modules[Object.keys(modules)[Object.keys(modules).indexOf(cmd)]].run(client, msg, config, db);
        }
    } catch (err) {
        console.log(err)
    } finally {
        msg.channel.stopTyping();
    }

    if(message.startsWith(config.prefix + 'search')) return; // to prevent multiple messages when we use +search in work channel
    let guildData = await db.getGuildSettings(msg.guild.id);
    if (guildData && guildData.settings.workChannel && msg.channel.id == guildData.settings.workChannel) return seach.run(null, msg);
})
