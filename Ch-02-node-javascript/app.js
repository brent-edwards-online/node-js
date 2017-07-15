var http =  require('http');
var myModule = require('./module1');
var myModule2 = require('./module2');

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(myModule.myString + '\n');
  myModule.myFunction();
  response.write(myModule2.myString + '\n');
  myModule2.myFunction();
  response.end();
}

http.createServer(onRequest).listen(8000,function(){
  console.log('What a weird language!');
})

