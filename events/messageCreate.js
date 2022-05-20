const fetch = require('node-fetch')
const list = require("../help_interactions/list")

module.exports = async(client, message) => {
        if (message.channel.id === "920756494859923576") {
            message.react("👍");
            message.react("👎");
        }
        if (list.rawList.find(x => x.name === message.content.toLowerCase())) {
            const found = list.rawList.find(x => x.name === message.content.toLowerCase())
            console.log("[Help Used] " + found + "")
            return message.channel.send(found.message)
        }
        if (message.content === "helper help") {
            message.channel.send({
                        embeds: [{
                                    color: "#3A871F",
                                    author: { name: "Server Helper | Command List", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                                    description: "Hello! I am a simple bot for managing this community! Some of my commands can be used by users with the <@&906123271068590100> role only.\n\n__Getting started__\n• My prefix is `helper`, you can see bellow the list of helps tips. (Example: `botoff` to send botoff embed)",
                                    fields: [{ name: "Commands", value: "`help [command]` : Sends this message.\n`ban @user` : Bans someone from the server\n`reportdev <bug>` : Reports a problem to the Dev team\n`team` : Shows the Green-bot team" }, { name: "Helping shortcuts", value: `${list.rawList.map(x => `\`${x.name}\`\n• Triggers: ${x.triggers.map(x=>x).join(", ")}`).join("\n\n")}` }]
            }]
        })
       }
       if (message.content === "helper team") {
        if (message.guild.memberCount !== message.guild.members.cache.size) await message.guild.members.fetch()
        message.channel.send({
                    embeds: [{
                                color: "#3A871F",
                                author: { name: "Server Helper | Staff List", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                                description: "Here is the list of every single Green-bot staff. Any other member of this server is not a member of the team.\n"+message.guild.members.cache.filter(m=>m.roles.cache.has("906123271068590100")).map(x=>x).join(", ")+"",
        }]
    })
   }
       if (message.content === "helper setups") {
       message.guild.channels.cache.get("870608583820181554").createWebhook('Green-bot | Help Server', {
            avatar: 'https://cdn.discordapp.com/avatars/783708073390112830/f4aabacb3667ba1831d3ca5f7b2e486d.webp?size=512',
            reason: 'Needed a cool new Webhook'
          })
            .then(wb=>{
                wb.send({content:`**<:greenbot:896402037795868692> Welcome to Green-bot's Community server, the official support server of Green-bot  <:greenbot:896402037795868692> **\n\nGreen-bot is a **high quality music bot** with free volume, 24/7 music, Audio filters, DJ system, bot channels, Autoplay, Custom playlists, and much more!\n\n**:link: Official links**
                
                > :globe_with_meridians: Green-bot Website: **[Click here](https://green-bot.app/)**
                > <:676556759875190806:830437777338138635> Premium:  **[Click here](https://green-bot.app/premium)**
                > <:greenbot:896402037795868692> Invite Green-Bot: **[Click here](https://green-bot.app/invite)**
                > <:greenbot:896402037795868692> Invite Green-Bot 2: **[Click here](https://green-bot.app/invite/1)** ( Prefix: \`.\`)
                > <:greenbot:896402037795868692> Invite Green-Bot 3: **[Click here](https://green-bot.app/invite/2)**( Prefix: \`-\`)
                > ⭐ Invite Green-bot Premium: **[Click here](https://green-bot.app/invite/premium)** ( Prefix: \`/\` ( Slash Commands))
                > 💪 Vote: **[Click here](https://green-bot.app/vote)**
                > <:612058498108227586:830440548007018517> User Guide: **[Click here](https://guide.green-bot.app)**\n\n **:question: How to get Support?**\n\n> Check <#869249318534651995> and click the red button to talk with an Helper.\n\n**:gem: How to go Premium?**\n\n> Check our [Patreon Page](https://green-bot.app/premium) `})
            })
            .catch(console.error)
   }
       if (message.content.startsWith("helper") && message.content.includes("ban")) {
           console.log("ban")
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()   
             const member = message.mentions.members.first();
             if(!member) return message.channel.send({embeds:[{description:"Please provide a valid member to ban",color:"#C73829"}]})
             if(member.roles.cache.has("906123271068590100"))return message.channel.send({embeds:[{description:"Banning a staff member is not allowed. Please contact a head mod if you think that we should ban this member",color:"#C73829"}]})
         await   member.send({embeds:[{description:"__Ban__\n\nHello "+member.user.username+", You have been banned from the **Green-bot | Help** server. If you think that's unjustified, feel free to contact Pauldb09#0001 on discord.",color:"#C73829"}]})
             member.ban({ reason: "Banned by " + message.author.tag + "" })
             message.channel.send({
                    embeds: [{
                                color: "#3A871F",
                                author: { name: "Server Helper | Ban case", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                                description: `__Ban case__\n\n> Member Banned: ${member} (\`${member.user.tag}\`)\n> Moderator: ${message.author}`,
        }]
    })
   }
   if (message.content.startsWith("helper") && message.content.includes("reportdev")) {
const reported = message.content.replace("helper reportdev","")
console.log(reported)
if (!message.member.roles.cache.has("906123271068590100")) return message.delete()   
message.guild.channels.cache.get("812577667462201345").send({
    embeds: [{
                color: "#3A871F",
                author: { name: "Server Helper | New bug report", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                description: `__Bug report__\n\n> Report: ${reported} \n> Moderator: ${message.author}`,
}]
})
      message.channel.send({
             embeds: [{
                         color: "#3A871F",
                         author: { name: "Server Helper | Bug report", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                         description: `Your bug report has been reported to the Developement team. Thanks!`,
 }]
})
}
    if (message.content.startsWith("-channels")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",
                title: "Please respect the channels",
                description: "This channel is only for **English users**. Talking another language here is against our rules ( checkout <#796380424313634816>) Go to <#795722065994842172> to talk another language or you will be muted.",

            }]
        })
    }
    if (message.content.startsWith("-botoff")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",
                title: "Why is the bot offline on my server?",
                description: "If the bot is offline in your server but not on the support server, the bot is maybe restaring, ask a developer about it.\n\nElse, your shard ( where is your server ) is crashed. In this case, wait for 5-10 max. \nNot fixed after 10m? ask a developer to restart the bot.",

            }]
        })
    }
    if (message.content.startsWith("-muted")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",
                title: "Why is the bot muted",
                description: "It seems that you have a problem with your permissions 😕\nYou can use the following guide to solve your problem:\nhttps://guide.green-bot.app/frequent-issues/bot-is-muted",

            }]
        })
    }
    if (message.content.startsWith("-ban")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const member = message.mentions.members.first();
        message.delete()
        member.ban({ reason: "Banned by " + message.author.tag + "" })
        message.channel.send(`**${member.user.username}** has been banned!`)
    }
    if (message.content.startsWith("-help")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        message.channel.send(`__**Command list**__\n\n1) User issues\n\`-muted  @member\` (How do I unmute the bot?)\n \`-playsong  @member\` ( How to use the bot?/ How to play a music?)\n \`-spotify  @member\` (Can i play my spotify playlist)\n\n2) Bot issues\n \`-botoff  @member\` ( The bot is offline)\n \`-restricted  @member\` (Why every single song is age-rescticted)\n\n3) Moderation\n\`-remove @member\` (Remove someones from further assistance)\n \`-ban @member\` (Bans someone)\n\`-channels @member\` (Please respect the channels)`)
    }
    if (message.content.startsWith("-playsong")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",
                title: "How do I use the bot?",
                description: "Join a voice channel and type `*play music name` to play a song. Checkout our [Documentation](https://guide.green-bot.app) for more information.",

            }]
        })
    }
    if (message.content.startsWith("-spotify")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",
                title: "How can I play my spotify playlist?",
                image: {
                    url: "https://cdn.discordapp.com/attachments/909506816705175553/921779376964665394/unknown.png"
                },
                description: "First, you need to get the Url of your playlist. You can check our [Documentation](https://guide.green-bot.app/spotify/)\n\nWhen you have the link of your playlist, join a voice channel and type `*play link`. Don't forget to replace link by your link.",

            }]
        })
    }
    if (message.content.startsWith("-restricted")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",

                title: "Why is the bot saying that this song is restricted?",
                description: "It seems that you are trying to play a video that is age-restricted on youtube.\n\nIf you are trying to play a song that is not age-restricted, It's that our server has been blocked by youtube. In this case, switch to <@902201674263851049> for 3-4 hours.",

            }]
        })
    }
    if (message.content.startsWith("-bots")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",

                title: "Bots you can use",
                description: "<@783708073390112830> | [Invite](https://green-bot.app/invite)\n<@902201674263851049> | [Invite](https://green-bot.app/invite/1)\n<@906246223504240641> | [Invite](https://green-bot.app/invite/2)\n<@913065900125597706> | [Invite](https://green-bot.app/invite/3)\n<@891706506750349342> | [Invite](https://green-bot.app/invite/premium)\n<@901466922820988968> | [Invite](https://green-bot.app/invite/chan)\n",

            }]
        })
    }
    if (message.content.startsWith("-ask")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",

                title: "Please ask your question straight away",
                description: "Hello! Please say your question straight away, so that we are not wasting our time! Thank you!",

            }]
        })
    }
    if (message.content.startsWith("-restart")) {
        if (!message.member.roles.cache.has("906123271068590100")) return message.delete()
        const user = message.mentions.members.first();
        message.delete()
        message.channel.send({
            content: `<@${user.id}>,`,
            embeds: [{
                color: "#3A871F",

                title: "The bot is currently restarting",
                description: "We're currently restarting the bot. Please wait for 5-10m and it will come back! Thanks for your patience!",

            }]
        })
    }
    if (message.content.startsWith("-k")) {
        if (!message.member.roles.cache.has("906123271068590100")) return;
        const toRemove = message.mentions.members.first()
        if (!toRemove) return message.channel.send("? Please provide an user")
        message.guild.members.cache.get(toRemove.id).roles.remove("895695434033553409")
        message.delete()
        return message.channel.send({ content: "**" + toRemove.user.username + "** has been removed from the channel" })
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
    if (message.content.startsWith("-stats")) {
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

            setInterval(function() {
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
            }, 10000)
        )

    }

    if (message.content.startsWith('-premium') && message.member.roles.cache.has("939917455428550689")) {
        const args = message.content.split(' ');
        const user = message.mentions.members.first()
        if (!args || !user) return;
        message.delete()
        if (args[1] === 'add') {
            const addData = {
                userID: user.id,
                tier: 7861330,
                expires: 14
            }
            fetch(`http://149.91.80.203:3000/addpremiumuser?token=dsgojp8049omfvkji0jkmkfy1`, {
                method: 'post',
                body: JSON.stringify(addData),
                headers: { 'Content-Type': 'application/json' }
            }).catch(err => console.log(err));
            message.channel.send(":ok_hand:")
                .then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 5000)
                })
            return;
        } else if (args[1] === 'remove') {
            fetch(`http://149.91.80.203:3000/removepremiumuser?token=dsgojp8049omfvkji0jkmkfy1&userid=${user.id}`, {
                method: 'post',
            }).catch(err => console.log(err));
            message.channel.send(":ok_hand:")
                .then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 5000)
                })
            return;
        }
    }
};
