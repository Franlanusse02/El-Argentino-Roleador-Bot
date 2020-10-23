module.exports = {
    name: 'miembros',
    description: 'Contador de gatos locos',
    execute(message, args){
        const Discord = require('discord.js');
		const maradonado = Discord.Client().emojis.cache.find(emoji => emoji.name === `maradonado`);
	    const miembros = new Discord.MessageEmbed()
        .setColor('#70cbff')
        .setTitle("Hola! (re cortés el bot, nada que ver)")
        .setThumbnail('https://i.ibb.co/PNszQD2/494b01e4ab2f472ec856787860a0f989.png')
        .setAuthor('El argentino roleador', 'https://i.ibb.co/PNszQD2/494b01e4ab2f472ec856787860a0f989.png')
   	    .addFields(
		    { name: 'Usted se encuentra en', value:`${message.guild.name}` },
		    { name: "Actualmente somos", value:`${message.guild.memberCount} gatos locos`},
            { name: "Disfruta de tu estancia (mientras puedas)", value: `${maradonado}`},)
            
        message.channel.send(miembros);

    }
}