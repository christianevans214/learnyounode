var fs = require('fs');
buf = fs.readFileSync(process.argv[2]);
var bufSplit = buf.toString().split("\n");
console.log(bufSplit.length-1);

