const { Util } = require('discord.js');

module.exports.run = async(client, interaction) => {
    interaction.reply({ content: `Status Embeds updated`, ephemeral: true });
    await client.statusManager.updateStatusEmbed(interaction)
    await client.statusManager.autoUpdate(interaction)
};

module.exports.help = {
    name: 'update',
    description: 'Update Status Embed',
};