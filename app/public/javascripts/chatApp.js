const socket = io('http://192.168.15.7:9090');

socket.on('msgParaCliente', (data) => {
    console.log(data.mensagem + '-é')
    let html = '';
    html += `<div class="dialogo">` +
        `<h4>  ${data.apelido} </h4>` +
        `<p>  ${data.mensagem} </p>` +
        `</div>`
    $('#dialogo').append(html);
    //autoscrow to botton:
    let element = document.getElementById("conversa");
    element.scrollTop = element.scrollHeight;
});

socket.on('participantesParaCliente', (data) => {
    console.log(data.mensagem + '-é')
    let html = '';
    html += `<span class="participante">` +
        `<h3> <img src="images/woman.png"></img> ${data.apelido} </h3>` +
        `</span>`
    $('#pessoas').append(html);
});

$('#enviar_msg').click(() => {
    sendMsg();
});


//enter to send
// Execute a function when the user releases a key on the keyboard
$(document).keypress(function (e) {
    if (e.which == 13) {
        sendMsg();
    }
});

sendMsg = () => {
    console.log("estive aqui")
    socket.emit('msgParaServidor', {
        apelido: $('#apelido').val(),
        menssagem: $('#mensagem').val(),
        apelido_atualizado: $('#apelido_atualizado').val()
    });
    $('#apelido_atualizado').val(1);
    $('#mensagem').val("");
    window.scrollTo(0, document.body.scrollHeight);
    //socket.emit('msgParaServidorbot',{menssagem:$('#mensagem').val()});
}
