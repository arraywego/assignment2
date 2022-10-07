const http = require('http');
const express = require('express');

const app = express();
app.use(express.static('public'));

// default URL to API
app.use('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);