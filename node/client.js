const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log(new Date().toISOString(), 'Connection opened!');
    ws.send(1);
});

ws.on('message', message => {
    console.log(new Date().toISOString(), 'Received:', message);
    setTimeout(() =>  ws.send(parseInt(message) + 1), 1000);
});

ws.on('close', () => {
    console.log(new Date().toISOString(), 'Connection closed!');
});
