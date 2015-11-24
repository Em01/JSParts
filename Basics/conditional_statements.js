//if/else

if (x > 2) {
	console.log("one");
} else {
	console.log("two");
}

//else if

if (x > 3) {
	console.log("one");
} else if ( x > 4) {
	console.log("two");
} else if ( x > 5) {
	console.log("three");
} else {
	console.log("Other");
}

//with assignment
if ((x = y)) {
	console.log("with assignment");
}

//switch statement
switch (fruittype) {
	case "Oranges":
	console.log("Oranges");
	break;
	case "Apples":
	console.log("Apples");
	break;
	default: 
	console.log("Sorry");
}

//while --print all numbers from 1 to 10 in descending order
var num = 10;

while (num > 0) {
  console.log(num);
  num--;
}

//while loop with if statement to print numbers divisible by 2 from 1-10
num = 10;

while (num > 10) {
	if (num % 2 === 0) {
		console.log(num);
	}
	num ++;
}