  
module.exports = {
    name: 'help',
    description: 'despliega la lista de comandos',
    execute(message, args){
        const Discord = require('discord.js');
        console.log('Vamos bien');
        const membed = new Discord.MessageEmbed()
        .setColor('#70cbff')
        .setTitle("Lista de Comandos")
        .setThumbnail('https://i.ibb.co/PNszQD2/494b01e4ab2f472ec856787860a0f989.png')
        .setAuthor('El argentino roleador', 'https://i.ibb.co/PNszQD2/494b01e4ab2f472ec856787860a0f989.png')
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
