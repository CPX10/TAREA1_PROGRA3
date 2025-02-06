const http = require('http');

const requestListener = function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('Servicio Habilitado');
};
const server = http.createServer(requestListener);
server.listen(8080);
