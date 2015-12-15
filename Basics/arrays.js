//count even numbers and erase odd numbers
var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
var evenCount = 0;
for (var i = 0; i < numberList.length; i ++ ){
	if (numberList[i] % 2 == 0) {
		evenCount ++;
	} else {
		numberList[i] = undefined;
	}
}
console.log(evenCount);

//using an array and functions to keep track of train passengers
function addPassenger(name, list) {
	if (list.length === 0) {
		list.push(name);
	} else {
		for (var i = 0; i < list.length; i++) {
			if(list[i] == undefined){
				list[i] = name;
				return list;
			} else if (i == list.length -1) {
				list.push(name);
				return list;
			}
		}
	}
}

//new passenger list
var passengerList = [];
passengerList = addPassenger("Greg Pollack", passengerList);
//delete passenger
function deletePassenger ( name, list ) {
	if(list.length === 0) {
		console.log("List is empty");
	} else {
		for (var i = 0; i < list.length; i++) {
			if(list[i] == name){
				list[i] = undefined;
				return list;
			} else if (i === list.length - 1) {
				console.log("Passenger not found!");
			}
		}
	}
	return list;
}


//iterate
function numStrings(list) {
	var count = 0;

	for(i = 0; i < count.length; i++) {
		if( typeof list[i] === "string") {
			count ++;
		}
	}
	return count;
}


//map
var numbers = [1, 2, 3, 4];

var results = numbers.map(function(arrayCell) {
	return arrayCell * 2;	
	}
);

console.log(results);

//array of functions
var puzzlers = [
  function(a) { return 3 * a - 8; },
  function(a) { return (a + 2) * (a + 2) * (a + 2); },
  function(a) { return a * a - 9; },
  function(a) { return a % 4; }
];


//return the sum of an arguments array
 var add = function() {
 	var total = 0;
 	for(i = 0; i<arguments.length; i++) {
 		total += + arguments[i];
 	}
 	return total;
 };

//sum array values
function sumArray(number) {
	return numbers.reduce(function(a, b){
		return a + b;
	});
}
//or
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
}, 10);