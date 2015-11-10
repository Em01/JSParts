//Throw a ReferenceError
var a;
console.log("The value of a is " + a); //undefined
console.log("The value of b is" + b); //referenceError


//Determine if a variable has a value
var input;
if (input === undefined){
	console.log('input was undefined');
} else {
console.log('input was not undefined');
}

//Evaluate as a boolean
var y = 10;
console.log(Boolean( y >2));


//hoisting
var x = 3;
console.log(x === undefined);

//vs

var x;
console.log(x === undefined);
x = 3;