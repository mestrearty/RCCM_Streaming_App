//dados de conexação
serverAdress =require('./config/settings');

//importar as configurações do servidor
const app = require('./config/server');

//parametrizar a porta de escuta

const server = app.listen(serverAdress.serverConfig.port, serverAdress.serverConfig.adress,() => {
    console.log('Servidor Node está On!!!');
});

//servidor de midia (streaming)
mediaServer =require('./config/mediaServer');

const io = require('socket.io').listen(server);
app.set('io', io);

//criar a conexão por websocket
io.on('connection', (socket) => {
    console.log('usuario conectou');

    socket.on('disconnect', () => {
        console.log('Usuário desconectou');
    });
    //diálogo
    socket.on('msgParaServidor', (data) => {
        console.log(data.apelido);
        socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.menssagem});
        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.menssagem});


        //participantes
        if (parseInt(data.apelido_atualizado) == 0) {
            socket.emit('participantesParaCliente', {apelido: data.apelido});
            socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido});
        }
    });
});

mediaServer.run();

