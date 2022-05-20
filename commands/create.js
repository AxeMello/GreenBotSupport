const { Util } = require('discord.js');

module.exports.run = async(client, interaction) => {
    interaction.reply({ content: 'Status Embed created', ephemeral: true });
    await client.statusManager.createStatusEmbed(interaction)
}

module.exports.help = {
    name: 'create',
    description: 'Create Status Embed',
};