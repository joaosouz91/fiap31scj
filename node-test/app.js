var http = require('http');

var request = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Text to be shown in browser</h1>");
    response.end();
}

var server = http.createServer(request);

var result = function () {
    console.log('Server running');
}

server.listen(3000, result);