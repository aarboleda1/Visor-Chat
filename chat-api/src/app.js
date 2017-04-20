// import http from 'http';
const http = require('http');
const express = require('express');
const cors = require('cors');
const io = require('socket.io');
const config = require('../config/config.json');
const path = require('path');

// setup server
const app = express();
const server = http.createServer(app);

const {Wit, log} = require('node-wit');
const interactive = require('node-wit').interactive;
const WIT_TOKEN = 'XC4GXNONRRY6GD2FZTPDEA6A2H6GTUTW';

const chatBotClient = new Wit({ accessToken: WIT_TOKEN });

const socketIo = io(server);

// Allow CORS
app.use(cors());

// Render a API index page
app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});
// Start listening
server.listen(process.env.PORT || config.port);
console.log(`Started on port ${config.port}`);

// Setup socket.io
socketIo.on('connection', socket => {
  const username = socket.handshake.query.username;
  
  socket.on('client:message', data => {
    chatBotClient.message(data.message)
      .then((res) => {
        console.log(res);
        const { confidence, value } = res.entities.intent[0];
        if (confidence > 0.5 && value === 'greeting') {
          socket.emit('server:message', { username: 'Anton', message: 'yo' });
        } else if (confidence > 0.5 && value === 'taxes') {
          socket.emit('server:message', { username: 'Anton', message: 'taxes' });          
        } else if (res.entities.intent[0] === undefined) {
          socket.emit('server:message', { username: 'Anton', message: `I didn't quite catch that, I've forwarded your message to our associates and we will be with you shortly` });                    
        }
      })
    .catch(console.error);
  });

  socket.on('disconnect', () => {
    console.log(`${username} disconnected`);
  });
});

module.exports = app;
