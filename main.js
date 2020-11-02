const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '<';

const fs = require('fs');



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
    console.log('Rol añadido!')
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
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'whatislove'){
        client.commands.get('whatislove').execute(message, args);
    } else if(command === 'ultraping'){
        client.commands.get('ultraping').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'fakeroll'){
        client.commands.get('fakeroll').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'miembros'){
        client.commands.get('miembros').execute(message, args);
    }
});

client.login(process.env.token);