//my first ASYNC I/O

var fs = require('fs');
var file = process.argv[2]

fs.readFile(file, function fun(err, buffer){
	console.log(buffer.toString().split("\n").length-1);
});
