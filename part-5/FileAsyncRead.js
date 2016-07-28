
/**

		@name:        FileASyncRead.js
		@description: A Simple Program to read data from a file asynchronously. 
		@author: 	  @rishabhio
 
*/

var fs = require('fs');
console.log('performing async read operation');
fs.readFile('mysecondfile.txt',function(error,data ){
	console.log('Data: ' + data);
});
console.log('Moving on to next Task');

