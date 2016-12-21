var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
	var reqUrl = url.parse(request.url, true);
	var date = new Date(reqUrl.query.iso);
	var result;
	
	if (reqUrl.pathname === '/api/parsetime') {
		result = {
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		};
	} else if (reqUrl.pathname === '/api/unixtime') {
		result = {
			'unixtime': date.getTime()
		};
	}
		
	if (result) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(result));
	} else {
		response.writeHead(404);
		response.end();
	}
});
server.listen(process.argv[2]);