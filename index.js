const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.login("NzM4MTI5MDMzNTA5ODYzNTM2.XyHaPQ.D0n755GWHCUrRtU93N3BQ6Adh-4")
client.commands = new Discord.Collection();

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(``);
            client.commands.set(commande.help.name , commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log("    ____       _  __ \n / ___|  ___| |/ _|\n \ ___ \ / _ \ | |_ \n ___) |  __/ |  _|\n |____/ \ m___|_|_|  \n")

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});




  client.on('message', async msg=> {
    if (msg.content === '!nitro') {
        msg.channel.send(`!nitro`)
    }
    if (msg.content === '!nitro') {
        msg.channel.send(`!nitro`)
    }
    if (msg.content === '!nitro') {
        msg.channel.send(`!nitro`)
    }
    if (msg.content === '!nitro') {
        msg.channel.send(`!nitro`)
    }
    if (msg.content === '!nitro') {
        msg.channel.send(`!nitro`)
    }
    if (msg.content === '!nitro') {
        msg.channel.send(`!nitro`)
    }
    if (msg.content === '!nitro') {
        msg.channel.send(`!nitro`)
    }
    if (msg.content === '!nitro') {
        msg.channel.send(`!nitro`)
    }
});