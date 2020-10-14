module.exports = {
    name: 'agree',
    description: 'Da el rol de miembro a quien envia el mensaje',
    execute(message, args){
        if(message.member.roles.cache.has('717516545148059668')){
            message.member.roles.remove('717516545148059668').catch(console.error);
            message.member.roles.add('685937885228040228').catch(console.error);
        }
    }
}