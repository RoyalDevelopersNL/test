const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {

    const bot = client.user.username

    const testEmbed = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL({dynamic: true, format: 'png'}))
    message.channel.send({ embeds: [testEmbed] })

}

module.exports.help = {
    name: 'ping',
    aliases: []
}