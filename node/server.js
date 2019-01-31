const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
    ws.on('message', message => {
        console.log(new Date().toISOString(), 'Received:', message);
        if (parseInt(message) > 10) {
            ws.close();
        } else {
            ws.send(parseInt(message) + 1);
        }
    });
    ws.on('close', () => {
        console.log(new Date().toISOString(), 'Connection closed!');
    });
    // Can set a one time message here
});

console.log('Server started!');