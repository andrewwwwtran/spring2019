// create http server
let app = require('http').createServer();

// bind socket to http server
let io = require('socket.io')(app, {path: '/socket.io'});

// listen on port 3000
app.listen(3000);
console.log('Listening for connections on port 3000');
io.on('connection', function(socket){
  console.log('Socket Connected');
  // send message from server to client
  socket.emit('fromServer', {id: 'Hello' });

  // listen for fromClient message
  socket.on('fromClient', function(data){
    console.log('Client: ' + data.id);
  });

  socket.emit('serverMsg2', {id: 'How are you?'});

  socket.on('clientMsg2', function(data2){
    console.log('Client: ' + data2.id);
  });

  // client disconnecting from server
  // socket.on('disconnect', (reason) => {
  //   if(reason == 'io server disconnect'){
  //     console.log("client disconnected");
  //   }
  // });
  socket.on('disconnect', function(){
    console.log('client disconnected.')
  });
});