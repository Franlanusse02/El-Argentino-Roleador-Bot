module.exports = {
    name: 'miembros',
    description: 'Contador de gatos locos',
    execute(message, args){
        const Discord = require('discord.js');
		        message.channel.send(`Usted se encuentra en: ${message.guild.name}\nActualmente somos: ${message.guild.memberCount} gatos locos \nDisfruta de tu estancia! (mientras puedas)`);

    }
}