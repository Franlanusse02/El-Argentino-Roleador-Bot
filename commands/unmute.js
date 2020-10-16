module.exports = {
    name: 'unmute',
    description: 'Desmutea un miembro',
    execute(message, args){
        
        let muteMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        let mainRole = '685937885228040228';
        let muteRole = '717544216380833894';
        let modRole = '685934052943200385';
        let helperRole = '718632822532735000'

        if (!args[0]){
            message.channel.send('Nadie fue seleccionado para desmutear.');
        } else if(!message.member.roles.cache.has(modRole) or !message.member.roles.cache.has(helperRole)){
            message.channel.send('No tenes permiso para usar este comando.');
        } else if(!muteMember) {
            message.channel.send('Esa persona no esta en el server.');
        } else if(message.member.roles.cache.has(modRole) or message.member.roles.cache.has(helperRole) || muteMember.roles.cache.has(muteRole)){
            muteMember.roles.add(mainRole);
            muteMember.roles.remove(muteRole);  
            message.channel.send(`${muteMember.user} fue desmuteado.`);
        } else if(message.member.roles.cache.has(modRole) or message.member.roles.cache.has(helperRole) || !muteMember.roles.cache.has(muteRole)){
            message.channel.send('La persona no esta muteada');
         
        } else {
            
        }
        
    }
}
