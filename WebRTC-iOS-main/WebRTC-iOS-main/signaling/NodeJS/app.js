const WebSocket = require('ws');

const wss = new WebSocket.Server({ host:'172.20.10.5', port: 3080 }, () => {
    console.log("Signaling server is now listening on port 3080")

});

// Broadcast to all.
wss.broadcast = (ws, data) => {
    wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};
wss.broadcast2 = (ws, data) => {
    wss.clients.forEach((client) => {
       // if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(data);
       // }
    });
};
wss.on('connection', (ws) => {
    console.log(`Client connected. Total connected clients: ${wss.clients.size}`)
    const countMessage = JSON.stringify({ type: 'connectedClients', count: wss.clients.size } );
   
    ws.onmessage = (message) => {
        console.log(message.data + "\n");
        wss.broadcast(ws, message.data);
       
    }
    wss.broadcast2(ws,countMessage);
    ws.onclose = () => {
        console.log(`Client disconnected. Total connected clients: ${wss.clients.size}`)
    }
});
