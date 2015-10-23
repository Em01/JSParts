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
}

// var logName = function(lang1, lang2) {

// 	console.log('Logged: ' + this.getFullName());

// }.bind(person);

var logPersonName = logName.bind(person);

logPersonName();