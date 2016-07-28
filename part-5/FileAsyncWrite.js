/**
		@name:        FileAsyncWrite.js
		@description: A Simple Program to write data to a file asynchronously. 
		@author: 	  @rishabhio
*/
var fs = require('fs');

var date1 = new Date();
var time_start = date1.getTime();
console.log("starting at: " + time_start);
console.log("ready to write file");

fs.writeFile('mysecondfile.txt','hello world! I am now in async universe',function(error){
	console.log('finished writing!');
});

console.log('other task 1');		// just to understand when this is actually executed in sync mode. 
console.log('other task 2');

var date2 = new Date();
var time_end = date2.getTime();
console.log("finishing at: " + time_end);
var execution_time = time_end - time_start;
console.log("Time for execution: " + execution_time );