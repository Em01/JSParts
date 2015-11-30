function Contact(name, email) {
	this.name = name;
	this.email = email;
}

var contact = new Contact("Andy", "andy@me.com");


function Dice(sides) {
	this.sides = sides;
	this.roll = function() {
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
	};	
}

var dice = new Dice(5);