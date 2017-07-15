var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8000,function(){
  console.log('Listening on port 8000');
});

