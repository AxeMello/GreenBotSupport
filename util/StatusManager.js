const fetch = require('node-fetch');
const mainURL = "http://api.jonixtech.de:3000/"
const { MessageEmbed, MessageButton } = require('discord.js');
let statusEmbedID = null;

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

class StatusManager {
    constructor(client) {
        this._client = client;
    }

    async getStatus (botid) {
        const url = mainURL + "statusone?botid=" + botid;
        console.log(url)
        const response = await fetch(url).catch(err => console.log(err));
        const data = await response.json();
        console.log("Get Data from" + data.botID)
        console.log(data)
        return data;
    }

    async allBotStatus (filter) {
        let url = null;
        if (filter) {
            url = mainURL + "statusall" + filter;
        }else{
            url = mainURL + "statusall";
        }
        console.log(url)
        const response = await fetch(url).catch(err => console.log(err));
        const data = await response.json();
        console.log("Get all Data")
        console.log(data)
        return data;
    }

    async createStatusEmbed (interaction) {
        var getData = await this._client.statusManager.allBotStatus();

        // console.log(Date.now())
        // //console.log(Date.now())
        // //console.log(dateFormat(Date.now(), "dd/mm/yyyy"))
         //console.log(d.toISOString().substring(0, 10))
        // console.log(`${d.getDate()}/${d.getMonth()}/${d.getFullYear()} | ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
        const myEmbed = new MessageEmbed()
        .setAuthor("Green-Bot Status", this._client.user.displayAvatarURL({ size: 2048, dynamic: false, format: 'png' }))
        .setDescription(`**Status from all Green-Bots:**`)
        .setColor("#3A871F")
        .setThumbnail(this._client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: false }))
        .setFooter(interaction.guild.name)
        .setTimestamp()
        getData.forEach((data) => {
            const isoDate = new Date(data.time)
            const title = isoDate.toLocaleString('en-GB', { hour12: false, timeZone: 'Europe/London' });
            myEmbed.addField(title, `<@${data.botID}>\n**Ping**: ${data.ping}ms\n**Server Count**: ${data.serverCount}\n **User Count**: ${data.userCount}`, true);
        });
        

        //{
        //     embeds: [{
        //       author: { name: "Green-Bot Status", icon_url: this._client.user.displayAvatarURL({ size: 2048, dynamic: false, format: 'png' }) },
        //       timestamp: "Status",
        //       color: "#3A871F",
        //       thumbnail: { url: this._client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: false }) },
        //       description: "**Status from all Green-Bots:**",
        //       //fields: getData[0].botID,
        //       footer: { text: interaction.guild.name }
        //     }],
        //     components: [
        //       {
        //         components: [
        //           {
        //             url: 'https://green-bot.app/status',
        //             "label": "Status Page",
        //             style: 5,
        //             type: 'BUTTON'
        //           }
        //         ],
        //         type: 'ACTION_ROW'
        //       },
        //     ]
        //  });
        interaction.guild.channels.cache.get(this._client.config.status_channel_id).send({ embeds: [myEmbed] })
        console.log(`Created Status Embed`)

        await this._client.statusManager.autoUpdate(interaction);
    }

    async updateStatusEmbed (interaction) {
        var updateData = await this._client.statusManager.allBotStatus();
        statusEmbedID = "925344524472049695";

        const updatedEmbed = new MessageEmbed()
        .setAuthor("Green-Bot Status", this._client.user.displayAvatarURL({ size: 2048, dynamic: false, format: 'png' }))
        .setDescription("**Status from all Green-Bots:**")
        .setColor("#3A871F")
        .setThumbnail(this._client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: false }))
        .setFooter(interaction.guild.name)
        .setTimestamp()

        updateData.forEach((data) => {
            const isoDate = new Date(data.time)
            const title = isoDate.toLocaleString('en-GB', { hour12: false, timeZone: 'Europe/London' });
            updatedEmbed.addField(title, `<@${data.botID}>\n**Ping**: ${data.ping}ms\n**Server Count**: ${data.serverCount}\n **User Count**: ${data.userCount}`, true);
        });
        let toUpdate = null;
        const statusChannel = interaction.guild.channels.cache.get(this._client.config.status_channel_id);
        statusChannel.messages.fetch().then(messages => {
            toUpdate = messages.filter(m => m.author.id === interaction.client.user.id);
            toUpdate.forEach(m => m.edit({ embeds: [updatedEmbed] }));
            console.log(`Updated ${toUpdate.size} Status Embeds`)
        })
    }

    async autoUpdate (interaction) {
        while (true) {
            await Sleep(60000)
            await this._client.statusManager.updateStatusEmbed(interaction);
            console.log("Auto Update")
        }
    }
}
module.exports = StatusManager;