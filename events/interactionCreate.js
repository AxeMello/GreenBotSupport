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
            embed.description = '**' + client.config.responses['response_' + interaction.customId.split('_')[1]] + '**';
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        if (interaction.customId === 'other') {
            if (interaction.guild.members.cache.get(interaction.user.id).roles.cache.has("895695434033553409")) {
                return interaction.reply({ content: `You already have acces to <#${client.config.assistance_channel_id}>.`, ephemeral: true })
            }
            interaction.guild.members.cache.get(interaction.user.id).roles.add("895695434033553409");
            embed.description = '**Go to <#' + client.config.assistance_channel_id + '> Channel and ask Your Questions.**';
            interaction.guild.channels.cache.get(client.config.assistance_channel_id).send('<@' + interaction.user.id + '> Here you can Ask your Further Questions.');
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }

    if (interaction.isCommand()) {
        const command = client.slashs.find(({ help }) => help.name == interaction.commandName);
        if (!command) return;
        if (!client.config.owners.includes(interaction.member.id)) return interaction.reply({ content: 'You aren\'t authorized to use this Command!', ephemeral: true });
        command.run(client, interaction);
    }
};