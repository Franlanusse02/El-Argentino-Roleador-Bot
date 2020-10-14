module.exports = {
    name: 'kick',
    description: 'Kickea un miembro',
    execute(message, args){
        
        const { member , mentions } = message;

        if(message.member.permissions.has('ADMINISTRATOR') || 
        message.member.permissions.has('KICK_MEMBERS')) {
            let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(target){
                target.kick();
                message.channel.send(`${target.user} fue kickeado por ${message.member}`);
            } else {
                message.channel.send(`${message.member} Por favor especifica a quien quiere kickear.`);
            }
        } else {
            message.channel.send(`${message.member} No tenes permiso para usar este command.`);
        }
    }
}