/**
		@name:        ReadJSON.js
		@description: A Simple Program to write data to a file asynchronously. 
		@author: 	  @rishabhio
*/
var fs = require('fs');

var contents = fs.readFileSync('stocks.json');
console.log('Stocks Information: ' +contents);
obj = JSON.parse(contents);
console.log(obj);