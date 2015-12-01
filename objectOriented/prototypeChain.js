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



//child.js
function Child(firstName, lastName, owner) {
	Parent.call(this, firstName, lastName);
	this.owner = owner;
}

Child.prototype = Object.create(Parent.prototype);


//parent.js
function Parent(firstName, lastName, job) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.job = job;
}