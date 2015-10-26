var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return this.function + ' ' + this.lastname;
	}
}

var john = {
	firstname: 'John',
	lastname: 'Doe'
}


// do not do this EVER!!! demo purpose only.
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
	firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());