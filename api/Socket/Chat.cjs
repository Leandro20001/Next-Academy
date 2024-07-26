const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
const server = http.createServer(app)
const io =  new Server(server,{cors:{origin:'http://localhost:5173',
 methods:['GET','POST']
}})
app.get('/chat',(req,res)=>{
    res.send('chat')
})

io.on('connection',(socket)=>{
  console.log(`User ${socket.id} connected`);
  socket.on('send_message',(message)=>{
  socket.broadcast.emit('receive_message',message)
  })
}

)

server.listen(3000,()=>console.log('Chat ON'))