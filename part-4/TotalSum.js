/**
		@name:        TotalSum.js
		@description: A Simple Program in Node.js to find sum of addition + subtraction + multiplication + division of 2 numbers. 
		@author: 	  @rishabhio
*/
	

var totalSum = function(A, B){
	
	var addition = A + B;
	var subtraction = A - B;
	var multiplication = A * B;
	var division = A / B;
	
	var total_sum = addition + subtraction + multiplication + division;
	return total_sum
}

// Initialize the start_time of program
var date1 = new Date();
var start_time = date1.getTime();

// call the function 5 times and log results on the console. 

console.log(totalSum(5,4));
console.log(totalSum(12,23));
console.log(totalSum(100,90));
console.log(totalSum(123.43,50.23));
console.log(totalSum(69593,2342));

// Find out the end time of program
var date2 = new Date();
var end_time = date2.getTime();

// Find execution time by subtracting start from end
var execution_time = end_time - start_time;
console.log("Time to execute program: " +execution_time + "ms");