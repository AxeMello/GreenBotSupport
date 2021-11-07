module.exports = async(client, message) => {

    if (message.content.startsWith("-remove")) {
        if (!message.member.roles.cache.has("859417657038864424")) return;
        const toRemove = message.mentions.members.first()
        if (!toRemove) return message.channel.send("? Please provide an user")
        message.guild.members.cache.get(toRemove.id).roles.remove("895695434033553409")
        return message.channel.send({ content: "**" + toRemove.user.username + "** has been removed" })
    }
    if (message.content.startsWith("-roles")) {
        const interaction = message
        message.channel.send({
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

    }
    if(message.content.startsWith("-stats")){
        if (!message.member.roles.cache.has("893185047664926720")) return;

        message.channel.send({
            embeds: [{
                author: { name: 'Green-Bot Stats', icon_url: client.user.displayAvatarURL({ size: 2048, dynamic: false, format: 'png' }) },
                timestamp: client.config.dashboard,
                color: client.config.embed_content.color,
                thumbnail: { url: client.config.thumbnail ? client.config.thumbnail_url : client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: false }) },
                description: `**Ping:** \`${message.client.ws.ping}\`\n**Guilds:** \`${message.client.guilds.cache.size}\`\n**User:** \`${message.client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\``,
                footer: { text: message.guild.name }
            }]
        }).then(msg =>

        setInterval(function(){
            msg.edit({
                embeds: [{
                    author: { name: 'Green-Bot Stats', icon_url: client.user.displayAvatarURL({ size: 2048, dynamic: false, format: 'png' }) },
                    timestamp: client.config.dashboard,
                    color: client.config.embed_content.color,
                    thumbnail: { url: client.config.thumbnail ? client.config.thumbnail_url : client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: false }) },
                    description: `**Ping:** \`${message.client.ws.ping}\`\n**Guilds:** \`${message.client.guilds.cache.size}\`\n**User:** \`${message.client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\``,
                    footer: { text: "Green-Bot | green-bot.app" }
                }]
            })
        },10000)
        )
        
    }
};