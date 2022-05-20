const { Client, Intents } = require('discord.js');
const { readdirSync, lstatSync } = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS] });
const StatusManager = require('./util/StatusManager')


client.config = require('./config.json');
console.log('Config Loaded');
client.slashs = [];
client.slashsArray = [];
client.statusManager = new StatusManager(client)

readdirSync('./commands').filter(file => lstatSync('./commands/' + file).isFile() && file.endsWith('.js')).forEach(file => {
    const { run, help } = require('./commands/' + file);
    client.slashsArray.push({ name: file.split('.')[0], description: help.description, options: help.options });
    client.slashs.push({ run, help: Object.assign(help, { name: file.split('.')[0] }) });
});

readdirSync('./events').filter(file => lstatSync('./events/' + file).isFile() && file.endsWith('.js')).forEach(file => {
    client.on(file.split('.')[0], require('./events/' + file).bind(null, client));
});

client.login(client.config.token).catch(() => console.log('Invalid Token'));
