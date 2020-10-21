  
module.exports = {
    name: 'help',
    description: 'despliega la lista de comandos',
    execute(message, args){
        const Discord = require('discord.js');
        console.log('Vamos bien');
        const membed = new Discord.MessageEmbed()
        .setColor('#4e0041')
        .setTitle("Lista de Comandos")
        .setThumbnail('https://cdn.discordapp.com/avatars/765340681249751102/494b01e4ab2f472ec856787860a0f989.png?size=256')
        .setAuthor('El argentino roleador', 'https://cdn.discordapp.com/avatars/765340681249751102/494b01e4ab2f472ec856787860a0f989.png?size=256')
   	    .addFields(
		    { name: 'ban', value: 'Banea a un miembro (solo para mods/admins)' },
		    { name: 'kick', value: 'Kickea a un miembro (solo para mods/admins)' },
		    { name: 'mute', value: 'Mutea a un miembro (solo para mods/admins)' },
		    { name: 'unmute', value: 'Desmutea a un miembro muteado (solo para mods/admins)' },
		    { name: 'invitacion', value: 'envia una invitacion al server' },
		    { name: 'ping', value: 'Pong' },
		    { name: 'ultraPing', value: 'Remate mano de dios' },
		    { name: 'whatislove', value: '(?' },
	    )
        message.channel.send(membed);

    }
}
