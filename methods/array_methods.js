//length
var array = [1, 2, 3, 4];
console.log(array.length);

//index into an array item
var array = ["hat", "chair", "arm", "scarf"];
// console.log(array.length);
var first = array[0];
var last = array[array.length -1];
console.log(first);
console.log(last);

//shit-removes first element
var array = [1, 2, 3, 4];
array.shift();
//returns [2, 3, 4];

//pop removes last element
var array = [1, 2, 3, 4];
array.pop();
//returns [1, 2, 3];

//pop-adds to the end of the array
var array = [1, 2, 3, 4];
array.push(22);
//returns [1, 2, 3, 4, 22];

//reduce-works also on empty array
function sum(numbers) {
	numbers.reduce(function(pv, cv) {
		return pv+cv;
	}, 0);
}

//indexOf-returns index of a specified element
var arr = [1, 2, 3];
arr.indexOf();


//filter()-returns new array of elements that pass the test
function size(element) {
  return element < 12;
}

[2, 20, 30].filter(size);

//every()-returns true or false if every element passes a specified test
function size(element) {
  return element < 2;
}

[1, 12, 8].every(size);

//concat-joins together two arrays
var dogs = [1, 2, 3];
var cats = [5, 6, 7];

dogs.concat(cats);

//get last element
var arr = ['red', 'blue', 'green'];
var last = arr[arr.length-1];

var ratings = [5, 2, 4];
console.log(ratings.valueOf());
// [5, 2, 4];

var entries = ['Planes', 'Trains', 'Automobiles'];
console.log(entries.toString());
//'Planes, Trains, Automobiles'

var numbers = [1, 2, 3];
numbers.join('|');
//("1|2|3")

var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(2);
console.log(newRatings);
//3, 4

var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(1, 3);
console.log(newRatings.toString());
//'2, 3'

var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(-2);
console.log(newRatings.toString());
//'3, 4'


var ratings = [1, 2, 3, 4];
var newRatings = ratings.splice(1, 2);
console.log(ratings.toString());
//"1, 4"

var ratings = [1, 2, 3, 4];
ratings.splice(2, 0, 99);
console.log(ratings.toString());
//"1, 2, 99, 3, 4"

var ratings = [1, 2, 3, 4];
ratings.splice(2, 1, 99, 100, 101);
console.log(ratings.toString());
//"1, 2, 99, 100, 101, 4"

var ratings = [4, 1, 3, 2];
ratings.sort();
console.log(ratings.toString());
//"1, 2, 3, 4

//Resolve problems with using sort - unicode
var ratings = [4, 1, 3, 2, 10];
ratings.sort(function (value1, value2) {
  return value1 - value2;
});
console.log(ratings.toString());
//"1, 2, 3, 4, 10"

var ratings = [1, 2, 3, 4, 5];
ratings.indexOf('3');
// -1

var array = [1, 2, 3, 4, 9];
array.copyWithin(0, 2, 4);
console.log(array);
//[3, 4, 3, 4, 9];

var array = [1, 2, 3, 4, 5];
array.fill(4);
//[4, 4, 4, 4, 4];
array.fill(4, 1);
//[1, 4, 4, 4, 4];
array.fill(4, 1, 2);
//[1, 4, 5, 5, 5];

var array = [1, 2, 3];
array.includes(1);
//true
array.includes(20);
//false

//forEach()
var dogs = [
  {
    breed: "Airedale",
    age: 4
  },
  { breed: "Labrador",
    age: 10
  }
];

var results = [];
dogs.forEach(function(dogs) {
  if(dog.age <= 7) {
  results.push(dog);
  }
});

//map
var array = [1, 2, 3, 4];

var tobe = array.map(function(letter) {
  return letter + "b";
});

//lastIndexOf
var array = [1, 2, 3, 4, 10];
array.lastIndexOf(10);
//4

//slice
var array = [1, 2, 3, 4, 5];
array.slice(1, 3);
//2, 3

var array = ["a", "b", "c", "d", "e"];
array.splice(2, 0, 'abba');
//"a", "b","abba", "c", "d", "e"
// - from end
removed = myFish.splice(myFish.length -3, 2);
// myFish is ['parrot', 'anemone', 'surgeon']
// removed is ['blue', 'trumpet']

//reduce-function applied against a accumulator and each value of the array to reduce to a single value.
//sum all array values
var array = [0, 1, 2, 3];
var total = array.reduce(function(a, b) {
  return a + b;
});
//6

var totalAgain = array.reduce(function(a, b) {
  return a + b;
}, 100);
//106

//flatten an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});

//reduceRight

var array = [1, 2, 3, 4];
var total = array.reduceRight(function(a, b) {
  return a + b;
});
//6

var array = [[1, 2], [3, 4], [5, 6]];
var flatten = array.reduceRight(function(a, b) {
  return a.concat(b);
});
//[5, 6, 3, 4, 1, 2]
