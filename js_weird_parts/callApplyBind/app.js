var person = {
	firstname: 'Emma',
	lastname: 'Williams',
	getFullName: function() {

		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

var logName = function(lang1, lang2) {

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('----------');
}

// var logName = function(lang1, lang2) {

// 	console.log('Logged: ' + this.getFullName());

// }.bind(person);

var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'en', 'es');
logName.appy(person, ['en', 'es']);



//function borrowing
var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
}

person.getFullName.apply(person2);


//function currying

function multiply(a, b) {
	return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multpleByTwo(4));