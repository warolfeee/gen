const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setAuthor("Creator Warolf#6459 ")
    .setDescription("WarSelf | PREFIX DU SELF : /")
    .addField("__outils__", "PARAMETRE outils Configure le selfBot")
    .addField("__Fun__ ", "outils Fun du selfbot")
    .addField("__gif__", "outils Gif du selfbot")
    .addField("__troll__", "outils TROLL du selfbot")
    .addField("__Mod__", "outils Moderation du selfbot")
    .setImage("https://cdn.discordapp.com/avatars/688809651994624078/a_accb65eba60e99c14ffc7a0792699b7e.gif?size=4096")
    .setColor("RED")
    .setTimestamp("")
    .setFooter("Warolf-self ")
    message.channel.send(help)
    message.delete()
}

module.exports.help = {
    name: "help"
}