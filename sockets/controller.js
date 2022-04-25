

const socketController = (socket) => {
    // Se podria validar con JWT
    // socket.disconect()
    // console.log('Cliente conectao', socket.id)

    socket.on('disconnect', () => {
        // console.log('desconectao')
    })

    socket.on('enviar-mensaje', (payload, callback) => {

        // console.log(payload)

        callback(12345)

        // this.io.emit('enviar-mensaje', payload)

        // Para el que envió el mensaje
        // socket.emit('enviar-mensaje', payload)

        // Para todos menos el que lo envió 
        socket.broadcast.emit('enviar-mensaje', payload)
    })

}


module.exports = {
    socketController
}