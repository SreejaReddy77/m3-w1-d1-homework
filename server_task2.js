var http = require('http');
var fs = require('fs');
var path = require('path');

var port = 5000;
var server = http.createServer(function(req, res) {
	if (req.url === '/home') {
		fs.readFile(path.join(__dirname, 'home.html'), 'utf8', function(err, data) {
			if (err) {
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end('Unable to load home page.');
				return;
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else if (req.url === '/about') {
		fs.readFile(path.join(__dirname, 'about.html'), 'utf8', function(err, data) {
			if (err) {
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end('Unable to load about page.');
				return;
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else if (req.url === '/contact') {
		fs.readFile(path.join(__dirname, 'contact.html'), 'utf8', function(err, data) {
			if (err) {
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end('Unable to load contact page.');
				return;
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Invalid Request!');
	}
});

server.listen(port, function() {
	console.log('The NodeJS server on port 5000 is now running....');
});
