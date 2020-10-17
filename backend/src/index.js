const express = require('express');  // express é o mais importante, permite usar rotas, parametros e respostas // posto de entrada
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors')

const app = express();

const server = require('http').Server(app); //dividindo o servidor para suportar http e webSocked, q permite fazer comuniçao em tempo real
const io = require('socket.io')(server); // enviar notificação em tempo real

mongoose.connect('mongodb+srv://semana:semana@cluster0.gbzg2.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) //conexão com o banco

app.use((req, res, next)=> {
    req.io = io;

    next();
}) // colocando o io para funfar em todos os controllers
 
app.use(cors()); //permitir q todos os endereços e todas url consiga acessar essa aplicação ( react nao conseguiria acessar sem o cors )

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))) // criando uma rota para imagens

app.use(require('./routes')) // rotas para declarar rotas da aplicação 

server.listen(3333); // port
