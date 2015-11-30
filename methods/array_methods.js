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