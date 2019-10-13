const http = require('http');
const port = process.env.PORT || 3000;
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});
server.listen( port, function () {
  console.log('Listening on port: %s', port );
});