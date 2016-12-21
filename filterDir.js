var fs = require('fs');
var path = require('path');
	
module.exports = function (folder, ext, callback) {
	var filterStr = '.' + ext;

	fs.readdir(folder, function (err, list) {
		if (err) {
			return callback(err);
		}
		
		list = list.filter(function (file) {
		  return path.extname(file) === filterStr;
		})
		
		callback(null, list);
	});
}