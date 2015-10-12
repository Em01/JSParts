person = new Object();

person["firstname"] = "Bob";
person["lastname"] = "Bobby";

var firstNameProperty = "firstname";

console.log(person.firstname);

var person = {};
console.log(person);

var person = { firstname: "Bob", lastname: "Bobby"};

console.log(person);

var person = {
	firstname: 'Tony',
	lastname: 'Alicea',
	address: {
		street: '111 Main St.'
	}
};

console.log(person);

function greet(person) {
	console.log('Hi ' + person.firstname);
}

greet(Tony);

greet({ firstname: 'Mary', lastname: 'Doe'});

Tony.address2 = {
	street: '333 Second St.'
};