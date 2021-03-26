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
    // heartbeat(ws);
});

console.log('Server started!');

function heartbeat(ws) {
    ws.send("X");
    setTimeout(() => heartbeat(ws), 1000);
}

// TODO: implement authentication using:
//  http://iostreamer.me/ws/node.js/jwt/2016/05/08/websockets_authentication.html
//  https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api