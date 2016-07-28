/**
		@name:        WriteJSON.js
		@description: A Simple Program to write data to a file asynchronously. 
		@author: 	  @rishabhio
*/
var fs = require('fs');


var stocks = {
	"toothpaste": 6,
	"bathsoap": 10,
	"toothbrush": 34,
	"shampoo": 12,
	"facewash": 4
}

fs.writeFile('stocks.json', JSON.stringify(stocks) ,function(error){
	console.log('finished writing!');
});