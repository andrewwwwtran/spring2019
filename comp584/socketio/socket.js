let app = require('http').createServer(); // create http server
let io = require('socket.io')(app, {path: '/socket.io'}); // bind socket to http server
app.listen(3000); // listen on port 3000
console.log('Listening for connections on port 3000');
io.on('connection', function(socket){
  console.log('Socket Connected');
});