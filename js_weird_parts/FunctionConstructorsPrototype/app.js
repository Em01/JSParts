function Cat(firstname, lastname) {

	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('This function is invoked');

}

//Saving memory space
Cat.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname;
};

var catOne = new Cat('Moggy', 'Tail');
console.log(catOne);

var catTwo = new Cat('Spotty', 'Paws');
console.log(catTwo);

Cat.prototype.getFormalFullName = function() {
	return this.firstname + ' ' + this.lastname;
}

console.log(catOne.getFormalFullName());