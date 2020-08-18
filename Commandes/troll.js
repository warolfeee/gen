const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setAuthor("Creator Warolf#6459 ")
    .setDescription("WarSelf | MOD MENU")
    .addField("hack", "creer une fausse attack")
    .addField("ip", "donne une l'ip")
    .addField("token", "donne le token")
    .setColor("RED")
    .setTimestamp("")
    .setFooter("Warolf-self | TROLL ")
    message.channel.send(help)
    message.delete()
}

module.exports.help = {
    name: "troll"
}