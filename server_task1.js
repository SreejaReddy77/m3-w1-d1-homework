var http = require('http');

var port = 5000;
var server = http.createServer(function(req, res) {
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Home page!');
	} else if (req.url === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('About page.');
	} else if (req.url === '/contact') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Contact page.');
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Invalid Request!');
	}
});

server.listen(port, function() {
	console.log('The NodeJS server on port 5000 is now running....');
});
