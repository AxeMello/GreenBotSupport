const { Util } = require('discord.js');

module.exports.run = async(client, interaction) => {
    const member = interaction.options.data.find(d => d.name == 'member').member;
    if (!interaction.member.roles.cache.has("894235448011006032")) return;
    if (!member) return interaction.reply(':x: `-` Please provide an valid user.');
    member.roles.remove(client.config.assistance_role_id);
    interaction.reply('I removed **' + Util.escapeMarkdown(member.user.tag) + '** from the channel.');
};

module.exports.help = {
    name: 'remove',
    description: 'Remove assistance member',
    options: [{
        name: 'member',
        description: 'The target @member',
        type: 6,
        required: true
    }]
};