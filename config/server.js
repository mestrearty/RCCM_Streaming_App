// importar o express

const express = require('express');

//importar o consign
const consign = require('consign');

//body-parser
const bodyParser = require('body-parser');

//importar express-validator
const expressValidator = require('express-validator');

//iniciar o express
const app = express();

//setar as variaveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurar o middleware express.static
app.use(express.static('./app/public'));

//configurar o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

//configurar o middleware express-validatos
app.use(expressValidator());

//efeuta o autoload das rotas, models e conrollers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);
//Exportar o app
module.exports = app;



