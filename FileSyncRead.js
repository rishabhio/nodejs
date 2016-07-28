/**

		@name:        FileSyncRead.js
		@description: A Simple Program to read data from a file synchronously. 
		@author: 	  @rishabhio
 
*/

var fs = require('fs');
console.log('performing read operation');
var contents = fs.readFileSync('myfirstfile.txt');
console.log('Data: ' + contents);
console.log('Moving on to next Task');