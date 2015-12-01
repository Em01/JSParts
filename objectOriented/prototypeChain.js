//teacher.js
function Teacher(firstName, lastName, roomNumber) {
  Person.call(this, firstName, lastName);
  this.room = roomNumber;
}
Teacher.prototype = Object.create(Person.prototype);

//person.js

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
 return this.firstName + " " + this.lastName; 
};

// dog.js
function Dog(firstName, lastName, breed) {
	Owner.call(this, firstName, lastName);
	this.breed = breed;
}

Dog.prototype = Object.create(Owner.prototype);

//owner.js
function Owner(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}








