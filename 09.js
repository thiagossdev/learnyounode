var http = require('http');

var urls = 0, values = ['', '', ''];
function geturl(v, c) {
	http.get(process.argv[2 + v], function (response) {	
		response.setEncoding('utf8');
		response.on('data', function (data) {
			values[v] += data;
		})
		response.on('end', function () {	
			urls++;
			if (urls === c) {
				values.forEach(function (value) {
					console.log(value);
				});
			}
		});
		response.on('error', console.error);
	}).on('error', console.error);
}

geturl(0, 3);
geturl(1, 3);
geturl(2, 3);

