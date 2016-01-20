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





