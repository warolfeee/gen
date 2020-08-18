const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setAuthor("Creator Warolf#6459 ")
    .setDescription("WarSelf | MOD MENU")
    .addField("kick", "Kick la Perssone Mentioner")
    .addField("ban", "ban la Perssone Mentioner")
    .addField("clear", "Clear un nombre de message")
    .addField("mpall", "mp tout le monde")
    .setColor("RED")
    .setTimestamp("")
    .setFooter("Warolf-self | MOD ")
    message.channel.send(help)
    message.delete()
}

module.exports.help = {
    name: "Mod"
}