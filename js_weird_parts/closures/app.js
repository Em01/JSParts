function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	}
}

var sayHi = greet('Hi');
sayHi('Tony'); //invoking a function that returns a function