function Person(firstname, lastname) {
  console.log(this);
	this.firstname = 'John';
	this.lastname = 'Doe';
  console.log('This function is invoked.');

}

var john = new Person('John', 'Doe');
console.log(john);

var kate = new Person('Kate', 'Igloo');
console.log(kate);