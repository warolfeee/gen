const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("Je ne trouve pas cet utilisateur !");
    let bReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas les permissions");
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cet utilisateur ne peut pas être expulsé ou banni");
 
    let banEmbed = new Discord.RichEmbed()
        .setTitle("__**BAN**__")
        .setColor("#bc0000")
        .setDescription(`${bUser} à bien été banni par <@${message.author.id}> dans le channel : ${message.channel}. Motif du BAN : ${bReason}`);
    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if (!incidentchannel) return message.channel.send("Je ne trouve pas le channel `logs` si il n'existe pas merci de bien vouloir le créer.");
 
    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}
 
module.exports.help = {
    name: "ban"
}