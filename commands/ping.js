module.exports = {
    name: 'ping',
    description: 'Ping command',
    execute(message, args){
        message.channel.send('Uuu loco no te cansas de romper los huevos?!');
    }
}