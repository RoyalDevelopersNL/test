const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    const helpEmbed = new Discord.MessageEmbed()
        .setColor(client.config.color)
        .setAuthor(`Al onze beschikbare commando's!`, client.user.displayAvatarURL())
        .setDescription(`Wij hebben voor jullie spelers verschillende commando's beschikbaar! Jullie kunnen deze commando's gebruiken om compleet gebruik te maken van de Discord! :star2:`)
        .addField(`Algemene Commando's`, `> \`/suggestie\` - Maak een server suggestie aan!\n> \`/bugreport\` - Maak een server bugreport aan!`)
        .addField(`Support Commando's`, `> \`/ticket\` - Maak een ticket aan in de Discord!`)
        .setFooter(client.config.footer, client.user.displayAvatarURL())

    await inter.reply({ embeds: [helpEmbed] })


}

module.exports.help = {
    name: 'help'
}