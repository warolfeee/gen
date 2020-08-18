const Discord = require('discord.js');

exports.run = (client, message, args) => {
        let mentionedUser = message.mentions.users.first() || message.author;
 
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author

    var help = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setDescription("HACK IP")
    .addField(`CT UN TROLL HIIIIHIIIII`)
    .setColor("RED")
    .setTimestamp("")
    .setFooter("Creator | Warolf")
    message.channel.send(help)
    message.delete()
}

module.exports.help = {
    name: "ip"
}