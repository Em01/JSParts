// IFIE
(function(name) {

	var greeting = 'Hello';
	console.log(greeting + ' ' + name);

}('John')); //IIFE


//Pass global object into the IIFE
// (function(global, name) {

// 	var greeting = 'Hello';
// 	global.greeting = 'Hello'; //intentionally affect the global object hola
// 	console.log(greeting + '' + name);

// }(window, 'John')); 

// console.log(greeting);