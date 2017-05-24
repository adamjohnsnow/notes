var httpServer = require("http-server");
var path = require("path");

var server = httpServer.createServer({root: __dirname, cache: 0})
server.listen(3000);
console.log('App running on port 3000')
