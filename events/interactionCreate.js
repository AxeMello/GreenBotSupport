function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

module.exports = async(client, interaction) => {
    if (interaction.isButton()) {
        const embed = {
            author: { name: client.config.embed_content.title, icon_url: client.config.embed_content.thumbnail ? client.config.embed_content.thumbnail_url : client.user.displayAvatarURL() },
            color: client.config.embed_content.color,
            description: null,
            timestamp: client.config.dashboard,
            footer: { text: interaction.guild.name }
        };

        if (interaction.customId.startsWith('role')) {
            const role = client.config.roles['role_' + interaction.customId.split('_')[1]];
            if (interaction.guild.members.cache.get(interaction.user.id).roles.cache.has(role.id)) {
                interaction.guild.members.cache.get(interaction.user.id).roles.remove(role.id);
                return interaction.reply({ content: role.remove, ephemeral: true });
            }
            interaction.guild.members.cache.get(interaction.user.id).roles.add(role.id);
            return interaction.reply({ content: role.add, ephemeral: true });
        }

        if (interaction.customId.startsWith('button')) {
            embed.description = '' + client.config.responses['response_' + interaction.customId.split('_')[1]] + '';
            if (interaction.customId.split('_')[1] === '11') embed.thumbnail = { url: "https://cdn.discordapp.com/attachments/812577667462201345/906948059685085184/unknown.png" };
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        if (interaction.customId === 'other') {
            if (interaction.guild.members.cache.get(interaction.user.id).roles.cache.has("895695434033553409")) {
                return interaction.reply({ content: `You already have acces to <#${client.config.assistance_channel_id}>.`, ephemeral: true })
            }
            interaction.guild.members.cache.get(interaction.user.id).roles.add("895695434033553409");
            embed.description = '**Go to <#' + client.config.assistance_channel_id + '> and ask your question. Please be as specific as possible.**';
            interaction.guild.channels.cache.get(client.config.assistance_channel_id).send('<@' + interaction.user.id + '> Here you can ask your questions.');
            interaction.reply({ embeds: [embed], ephemeral: true });
            await Sleep(72 * 60 * 60 * 1000)
            interaction.guild.members.cache.get(interaction.user.id).roles.remove("895695434033553409")
            return console.log("Removed Further Assistance Role from " + interaction.user.id)
        }
        if (interaction.customId === 'bug') {
            if (interaction.guild.members.cache.get(interaction.user.id).roles.cache.has("947908005393989672")) {
                return interaction.reply({ content: `You already have acces to <#947907934019538984>.`, ephemeral: true })
            }
            interaction.guild.members.cache.get(interaction.user.id).roles.add("947908005393989672");
            embed.description = '**Go to <#947907934019538984> and report the bug to our dev team.**';
            interaction.guild.channels.cache.get("947907934019538984").send('<@' + interaction.user.id + '> Here you can report the bug.');
            interaction.reply({ embeds: [embed], ephemeral: true });
            await Sleep(72 * 60 * 60 * 1000)
            interaction.guild.members.cache.get(interaction.user.id).roles.remove("947908005393989672")
            return console.log("Removed Further Assistance Role from " + interaction.user.id)
        }
    }

    if (interaction.isCommand()) {
        const command = client.slashs.find(({ help }) => help.name == interaction.commandName);
        if (!command) return;
        if (!client.config.owners.includes(interaction.member.id)) return interaction.reply({ content: 'You aren\'t authorized to use this Command!', ephemeral: true });
        command.run(client, interaction);
    }
};