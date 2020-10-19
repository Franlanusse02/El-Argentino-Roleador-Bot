module.exports = {
    name: 'ban',
    description: 'Bannea un miembro',
    execute(message, args){
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const { member , mentions } = message;

        if (target == message.member.id){
            
            message.channel.send('No puedes banearte a vos mismo.');

        
        } else if (message.member.permissions.has('ADMINISTRATOR') || 
        message.member.permissions.has('BAN_MEMBERS')) {
            
            if(target){
                target.ban();
                message.channel.send(`${target.user} fue baneado por ${message.member}`);
            } else {
                message.channel.send(`${message.member} Por favor especifica a quien quiere banear.`);
            }
        } else {
            message.channel.send(`${message.member} No tenes permiso para usar este comando.`);
        }
    }
}