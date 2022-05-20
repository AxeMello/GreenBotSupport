module.exports.run = async(client, interaction) => {
    interaction.guild.channels.cache.get(client.config.desk_channel_id).send({
        embeds: [{
            author: { name: "Green-bot | Help desk", icon_url: client.user.displayAvatarURL({ size: 2048, dynamic: false, format: 'png' }) },
            timestamp: client.configdashboard,
            color: client.config.embed_content.color,
            description: '\u200b\n1️⃣ ' + client.config.embed_content.question_1 + '\n\u200b\n2️⃣ ' + client.config.embed_content.question_2 + '\n\u200b\n3️⃣ ' + client.config.embed_content.question_3 + '\n\u200b\n4️⃣ ' + client.config.embed_content.question_4 + '\n\u200b\n5️⃣ ' + client.config.embed_content.question_5 + '\n\u200b\n6️⃣ ' + client.config.embed_content.question_6 + '\n\u200b\n7️⃣ ' + client.config.embed_content.question_7 + '\n\u200b\n8️⃣ ' + client.config.embed_content.question_8 + '\n\u200b\n9️⃣ ' + client.config.embed_content.question_9 + '\n\u200b\n🔟 ' + client.config.embed_content.question_10 + '\n\u200b\n\u200b\n> **Need help**\nIf your question is not on the list. You\'ll be helped by an helper.\n\u200b\n\n> **Bug report**\nTo report a bug. Please give as much details as possible',
        }],
        components: [{
                components: [{
                        customId: 'button_1',
                        emoji: '1️⃣',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'button_2',
                        emoji: '2️⃣',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'button_3',
                        emoji: '3️⃣',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'button_4',
                        emoji: '4️⃣',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'button_5',
                        emoji: '5️⃣',
                        style: 2,
                        type: 'BUTTON'
                    }
                ],
                type: 'ACTION_ROW'
            },
            {
                components: [{
                        customId: 'button_6',
                        emoji: '6️⃣',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'button_7',
                        emoji: '7️⃣',
                        style: 2,
                        type: 'BUTTON'
                    },

                    {
                        customId: 'button_8',
                        emoji: '8️⃣',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'button_9',
                        emoji: '9️⃣',
                        style: 2,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'button_10',
                        emoji: '🔟',
                        style: 2,
                        type: 'BUTTON'
                    },

                ],
                type: 'ACTION_ROW'
            },
            {
                components: [{
                        customId: 'other',
                        label: 'Need help',
                        style: 4,
                        type: 'BUTTON'
                    },
                    {
                        customId: 'bug',
                        label: 'Bug report',
                        style: 3,
                        type: 'BUTTON'
                    }
                ],
                type: 'ACTION_ROW'
            }
        ]
    });
    interaction.reply({ content: 'Desk created', ephemeral: true });
};

module.exports.help = {
    name: 'desk',
    description: 'desk'
};