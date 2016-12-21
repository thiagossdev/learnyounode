var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
	var count = 0, str = '';
	
	response.setEncoding('utf8');
	response.on('data', function (data) {
		count += data.length;
		str += data;
	});
	response.on('end', function () {	
		console.log(count);
		console.log(str);
	});
	response.on('error', console.error);
}).on('error', console.error);

