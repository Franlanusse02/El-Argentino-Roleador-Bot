module.exports = {
    name: 'ultraping',
    description: 'Remate mano de dios.',
    execute(message, args){
        var respuestas = ['Fuaa loco, que fuerza tenes! Asi no puedo devolverte! Toma, aca tenes 5 p pa tomar ese vi... eee digo por ganarme jaja.', 'Tomaaaaa! Te ganeeee! Sos malisimo pibe.'];
        var aleatorio = Math.floor(Math.random()*(respuestas.length));
        message.channel.send(respuestas[aleatorio]);
    }
}
