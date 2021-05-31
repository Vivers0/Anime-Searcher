const Handler = require("./Handler");

module.exports = class Handle extends Handler {
    handle () {
        this.on('message', async msg => {
            if (msg.author.bot) return;
            let message = msg.content.toLocaleLowerCase();
            try {
                let cmd = message.split(' ')[0]
                if (Object.keys(this.modules).includes(cmd)) {
                    msg.channel.startTyping();
                    this.modules[Object.keys(this.modules)[Object.keys(this.modules).indexOf(cmd)]].run(this, msg, config, this.db);
                }
            } catch (err) {
                console.log(err)
            } finally {
                msg.channel.stopTyping();
            }
            
            if(message.attachments && !message.startsWith(config.prefix + 'search')) return; // to prevent multip
            // TODO this.db
            let guildData = await this.db.getGuildSettings(msg.guild.id);
            if (guildData && guildData.settings.workChannel && msg.channel.id == guildData.settings.workChannel) return search.run(this, msg);
        })
    }
}