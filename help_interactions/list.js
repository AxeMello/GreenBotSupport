module.exports = {
    rawList: [{
            name: "botoff",
            aliases: ["down", "off"],
            triggers: ["Why is the bot online?", "bot inst responding", "bot is down"],
            message: {
                embeds: [{
                    color: "#3A871F",
                    author: { name: "Server Helper | Faq #1 ", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                    title: "Why is the bot offline on my server?",
                    description: "If the bot appears as \"offline\" in your server check the following things:\n\n• The bot is not having issues ( check <#895703937661939802> )\n• You are checking the right bot\n\n> If you problem is still not solved. Consider clicking the Red button on <#869249318534651995>"
                }]
            }
        },
        {
            name: "quality",
            aliases: ["down", "off"],
            triggers: ["Why is the bot buffering?", "the bot is laggy", "bot is down"],
            message: {
                embeds: [{
                    color: "#3A871F",
                    author: { name: "Server Helper | Faq #2 ", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                    title: "Why is bot laggy/buffering?",
                    description: "If the bot is laggy/buffering for you, check the following things:\n\n• That's not related to your internet connection\n• Try to do the `fix` command. it will fixes any unexpected problems and change the region of the voice channel\n\n> If you problem is still not solved. Consider clicking the Red button on <#869249318534651995>"
                }]
            }
        },
        {
            name: "usebot",
            aliases: ["down", "off"],
            triggers: ["How can I use the bot?", ],
            message: {
                embeds: [{
                    color: "#3A871F",
                    author: { name: "Server Helper | Faq #3 ", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                    title: "How do I use this amazing bot?",
                    description: "Join a voice channel and type `*play music name` to play a song. Checkout our [Documentation](https://guide.green-bot.app) for more information.\n\nYou can get the command List here:\nhttps://green-bot.app/commands"
                }]
            }
        },
        {
            name: "ask",
            aliases: ["down", "off"],
            triggers: ["I have a question", "If users didn't ask ( only in further assistance channel!!!"],
            message: {
                embeds: [{
                    color: "#3A871F",
                    author: { name: "Server Helper | Faq #4 ", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                    title: "Did you have a question?",
                    description: "Hello! Please ask directly your question so we are not wasting our time! Thanks!"
                }]
            }
        },
        {
            name: "github",
            aliases: ["down", "off"],
            triggers: ["Any problem with the github"],
            message: {
                embeds: [{
                    color: "#3A871F",
                    author: { name: "Server Helper | Faq #5 ", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                    title: "Github support",
                    description: "We don't help with the github/replit on this server, please create an issue on the github to get help: [Create a github issue](https://github.com/GreenBotDeveloppement/Green-bot/issues/new/) "
                }]
            }
        },
        {
            name: "outage",
            aliases: ["down", "off"],
            triggers: ["Advices to check the outage channel"],
            message: {
                embeds: [{
                    color: "#3A871F",
                    author: { name: "Server Helper | Faq #6 ", icon_url: "https://cdn.discordapp.com/avatars/894261461575168071/38443eed8bbab6c221b64d0af8f99b38.png?size=4096" },
                    title: "The bot is currently having unexpected issues",
                    description: "The bot is currently having an outage. Our dev team should be working on it. We will send a message in <#948902189370318870> once it's fixed!"
                }]
            }
        }
    ]
}