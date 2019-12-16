module.exports.iniciaChat = (application, req,res)=>{
    const dadosForm = req.body;
    req.assert('apelido','Nome ou apelido é obrigatorio').notEmpty();
    req.assert('apelido','Nome ou apelido tem que ter entre 3 e 15 caracteres').len(3,15);
    const erros = req.validationErrors();

    if(erros){
        res.render("index",{validacao: erros});
        return;
    }
    application.get('io').emit('msgParaCliente',{apelido: dadosForm.apelido,mensagem: ' acabou de entrar no chat'});
    console.log(req)
    res.render("chat",{dadosForm : dadosForm});
};
