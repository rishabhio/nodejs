/**
		@name:        MonitorFile.js
		@description: A Simple Program to monitor a file in real time. 
		@author: 	  @rishabhio
*/
var fs = require('fs');

fs.watchFile('stocks.json',function(original,changed){
	console.log(' File Changed ');
	stocks_new = JSON.parse(fs.readFileSync('stocks.json'));
	console.log('Changed file: ',stocks_new);
});