
// Create file using .ts extension
// Run the file using  tsc filename  extension is optional

// When we run this file same file of .js will be created and we can run that file using node filename	

// -.ts file is normally consider as script that's why it shows some error
// - to consider this file as module we need to write export statement which export nothing
// -export {}

// - to manage the changes directly if we change something on .ts file that should be reflect to .js file without compilation we use watch cmd
// tsc filename --watch


export{}

let a:number=5;
console.log(a);

let message:String='Hello kajal';
console.log(message);

let isCorrect:boolean=true;
console.log(isCorrect);


//When we don't know which type of variable then we can use any
let randomValue:any=10;
//randomValue=true;

console.log(randomValue);

// But By using this we can assign any type of variable also we can consider that variable as function.
// To tackle this issue
// We can use unknown so by specifying this we can avoid the variable to be function or construct

let randomValue1:unknown=10;
console.log(randomValue1);

let multiType:number|boolean;
//multiType=20;
multiType=true;

console.log(multiType);



