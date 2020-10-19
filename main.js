const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '<';

const fs = require('fs');

let modRole = '685934052943200385';
let helperRole = '718632822532735000';


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('El Bot Oficial del Argentino Roleador esta en linea');
});

client.on('guildMemberAdd', member => {
    const role = member.guild.roles.cache.filter(r => r.name === "roleName");
    if (!role) return;

    member.roles.add('717516545148059668');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
       
    } else if(command === 'invitacion'){
        client.commands.get('invitacion').execute(message, args);

    } else if(command === 'agree'){
        client.commands.get('agree').execute(message, args);

    } else if(command === 'mute'){
        if (message.member.roles.cache.has(modRole) && message.members.roles.cache.has(helperRole)){
            channel.message.send(`${message.member} No podes mutearte a vos mismo.`)
        } else {
            client.commands.get('mute').execute(message, args);
        }

    } else if(command === 'unmute'){
        if (message.member.roles.cache.has(modRole) && message.members.roles.cache.has(helperRole)){
            channel.message.send(`${message.member} No podes desmutearte a vos mismo.`)
        } else {
            client.commands.get('unmute').execute(message, args);
        }

    } else if(command === 'whatislove'){
        client.commands.get('whatislove').execute(message, args);

    } else if(command === 'ultraping'){
        client.commands.get('ultraping').execute(message, args);

    } else if(!command){
        message.channel.send('Ese todavia no me lo aprendi, pedile a Fran que me lo enseñe.')

    } else if(command === 'ban'){
        if (message.message.member.roles.cache.has(modRole) && message.members.roles.cache.has(helperRole)){
            channel.message.send(`${message.member} No podes banearte a vos mismo.`)
        } else {
            client.commands.get('ban').execute(message, args);
        }
    } else if(command === 'kick'){
        if (message.member.roles.cache.has(modRole) && message.members.roles.cache.has(helperRole)){
            channel.message.send(`${message.member} No podes kickearte a vos mismo.`)
        } else {
            client.commands.get('kick').execute(message, args);
        }
    }
});

client.login(process.env.token);