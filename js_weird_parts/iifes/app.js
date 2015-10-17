//function statement
function greet(name) {
	console.log('Hello ' + name);
}
greet('Jon');

// using a function expression
var greetFunc = function(name) {
	console.log('Hello ' + name);
};
greetFunc('Jon');

// using an immediately invoked function expression (IIFE)
var greeting = function(name) {
	console.log('Hello ' + name);
}('Jon');



(function(name) {

	return 'Hello ' + name;

});


var firstname = 'Jon';

(function(name) {

	var greeting = 'Inside IFE: Hello';
	console.log(greeting + ' ' + name);

}(firstname)); //IIFE