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

//cat to inherit from Animal

function Animal(voice) {
  this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
  alert(this.voice);
};

function Cat(name, color) {
  Animal.call(this);
  this.name = name;
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluffy', 'White');






