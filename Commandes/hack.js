const Discord = require('discord.js');

exports.run = (client, message, args) => {
        let mentionedUser = message.mentions.users.first() || message.author;
 
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author

    var help = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setDescription("HACK")
    .addField("IP : `use /ip [user]`", `HACK`)
    .addField("TOKEN : `use /token [user]`", `HACK`)
    .addField(`RAID ID : ${member.user.tag}`, `HACK`)
    .setColor("RED")
    .setTimestamp("")
    .setFooter("Creator | Warolf")
    message.channel.send(help)
    message.delete()
}

module.exports.help = {
    name: "hack"
}