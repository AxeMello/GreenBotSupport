module.exports.run = async(client, interaction) => {
    interaction.channel.send({
        embeds: [{
            author: { name: '🔔 Get notified when :', icon_url: client.user.displayAvatarURL({ size: 2048, dynamic: false, format: 'png' }) },
            timestamp: client.config.dashboard,
            color: client.config.embed_content.color,
            thumbnail: { url: client.config.thumbnail ? client.config.thumbnail_url : client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: false }) },
            description: '\u200b\n**1.** 🛑 Outages\n When <@783708073390112830> has an outage or is restarting.\n\n**2.** 🔔 Updates\nWhen a new feature is added on <@783708073390112830>\n\n**3.** 🎁 Giveaways\nWhen there are a new giveaway on the server\n\n**4.** ✨ Vote reminder\nSends you a private message when you can upvote Green-bot again.\n\u200b\n\nClick on the button corresponding to the role you want to take a role',
            footer: { text: interaction.guild.name }
        }],
        components: [{
                components: [{
                        customId: 'role_1',
                        emoji: '🛑',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'role_2',
                        emoji: '🔔',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'role_3',
                        emoji: '🎁',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'role_4',
                        emoji: '✨',
                        style: 2,
                        type: 'BUTTON'
                    }
                ],
                type: 'ACTION_ROW'
            },

        ]
    });
    interaction.reply({ content: 'Roles created', ephemeral: true });
};

module.exports.help = {
    name: 'roles',
    description: 'Role reaction'
};