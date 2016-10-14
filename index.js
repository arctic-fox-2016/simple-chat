let express = require('express')
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)

app.set('view-engine',"ejs")

app.get('/', function(req,res,next){
  res.render('index.ejs')
})

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })

  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
    console.log("message: " + msg)
  })
})

http.listen(3000, function(){
  console.log('listening on 3000')
})
