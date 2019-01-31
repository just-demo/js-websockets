const WebSocket = require('ws');
const utils = require('./utils');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    ws.send(utils.response());
});

ws.on('message', message => {
    console.log(utils.now(), 'Received:', message);
    setTimeout(() => ws.send(utils.response(message)), 1000);
});