const express = require('express'); //import express module
const app = express() //express fxn to create app
const http = require('http') //import http module
const server = http.createServer(app) //create http server for app
const socketio = require('socket.io') //import socketio module
// @ts-ignore
const io = socketio(server)

app.use(express.static('public')) //use public dir to serve static files
io.on('connection' , onConnection) //bind connection event to callback
server.listen(2000 , () => console.log('Listening on *:3000')) //server listens on port 3000


function onConnection(socket) {
    console.log('user connected')
    socket.on('disconnect', onDisconnect)
    socket.on('chat message' ,onChatMessage)
}

function onChatMessage (message) {
    console.log('message', message)
    io.emit('chat message', message)

}
function onDisconnect () {
    console.log('user dsconnected')
}