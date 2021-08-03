"use strict";
// Create file using .ts extension
// Run the file using  tsc filename  extension is optional
exports.__esModule = true;
var a = 5;
console.log(a);
var message = 'Hello kajal';
console.log(message);
var isCorrect = true;
console.log(isCorrect);
//When we don't know which type of variable then we can use any
var randomValue = 10;
//randomValue=true;
console.log(randomValue);
// But By using this we can assign any type of variable also we can consider that variable as function.
// To tackle this issue
// We can use unknown so by specifying this we can avoid the variable to be function or construct
var randomValue1 = 10;
console.log(randomValue1);
var multiType;
//multiType=20;
multiType = true;
console.log(multiType);
