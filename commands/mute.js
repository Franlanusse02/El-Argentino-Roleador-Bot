module.exports = {
    name: 'mute',
    description: 'Mutea un miembro',
    execute(message, args){
        
        let mainRole = '685937885228040228';
        let muteRole = '717544216380833894';
        let modRole = '685934052943200385';
        let helperRole = '718632822532735000';
        let muteMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if(!message.member.roles.cache.has(modRole) && !message.member.roles.cache.has(helperRole)){
            console.log('Oh oh') 
            message.channel.send('No tenes permiso para usar este comando.');
        } else if (muteMember == message.member.id){
            if (message.member.roles.cache.has(modRole) && message.member.roles.cache.has(helperRole)) {  
                message.channel.send('No puedes mutearte a vos mismo.')
            }
        } else if (!args[0]){
            message.channel.send('Nadie fue seleccionado para mutear.');
            
        } else if (message.member.roles.cache.has(modRole) || muteMember.roles.cache.has(muteRole)){
            muteMember.roles.remove(mainRole);
            muteMember.roles.add(muteRole);

            message.channel.send(`${muteMember.user} fue muteado.`);

        } else if (message.member.roles.cache.has(helperRole) || muteMember.roles.cache.has(muteRole)){
            muteMember.roles.remove(mainRole);
            muteMember.roles.add(muteRole);

            message.channel.send(`${muteMember.user} fue muteado.`);
        
        } else if(!muteMember) {

            message.channel.send('Esa persona no esta en el server.');
            
        }
    }
}
