// global namespace
var MYAPP = MYAPP || {};

//sub namespace
MYAPP.event = {};

//Defining a class
var person = function() {};

//object(class instance)
var person = function() {};

var person1 = new Person();
var person2 = new Person();

//constructor of the class logs new message every time the person is instantiated
var person = function() {
	console.log("New person is instantiated");
};

person1 = new Person();
person2 = new Person();