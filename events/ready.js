/* eslint-disable no-shadow */
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = async client => {
    console.log(client.user.tag + ' is Ready!');

    client.user.setPresence({ status: 'online', activities: [{ name: "Helping you :)", type: 'WATCHING' }] });

    if (client.config.enable_slash) {
        const rest = new REST({ version: '9' }).setToken(client.config.token);

        try {
            console.log('Started refreshing application commands.');

            await rest.put(Routes.applicationGuildCommands(client.user.id, '784773050956513290'), { body: client.slashsArray });

            console.log('Successfully reloaded application commands.');
        } catch (error) {
            console.error(error);
        }
    }
};