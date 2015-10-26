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

for (var prop in john) {
	if (john.hasOwnProperty(prop)) {
		console.log(prop + ': ' + john[prop]);
	}
}

var jane = {
	address: '111 Main St.', 
	getFormalFullName: function() {
		return this.lastname + ', ' + this.firstname;
	}
}

var jim = {
	getFirstName: function() {
		return firstname;
	}
}

_.extend(john, jane, jim);

console.log(john);

