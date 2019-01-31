const WebSocket = require('ws');
const utils = require('./utils');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
    ws.on('message', message => {
        console.log(utils.now(), 'Received:', message);
        ws.send(utils.response(message));
    });
    // Can set a one time message here
});