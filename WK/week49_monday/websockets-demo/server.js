const websocket = require('ws')

const server = new websocket.Server({ port: 8080 })

server.on('connection', (socket) => {
  console.log('klient ansluten, woho!')

  socket.on('message', (message) => {
    console.log('Meddelande från klient:', String(message))

    server.clients.forEach((client) => {
      if (client.readyState === websocket.OPEN) {
        client.send(String(message))
      }
    })
  })

  socket.on('close', () => {
    console.log('klient frånkopplad')
  })
})

console.log('websocket-servern körs på ws://localhost:8080')