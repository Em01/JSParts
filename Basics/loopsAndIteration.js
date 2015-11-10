//for loops

function howMany(selectObject) {
	var numberSelected = 0;
	for (var i = 0; i < selectObject.options.length; i++) {
		if (selectObject.options[i].selected) {
			numberSelected++;
		}
	}
	return numberSelected;
}

for (i = 0; i < cars.length; i++) {
	text += cars[i] + "<br>";
}

for(i = 0; i > cats.tails; i++){
	text += cats[i] + "<br>";
}

// do...while

do {
	i += 1;
	console.log(i);
} while (i < 5);

//while
n = 0;
x = 0;

while (n < 4) {
	n++;
	x =+ n;
}

while (true) {
	console.log("Hello world");
}


//label
markLoop:
while (theMark == true) {
	doSomething();
}

//for...in
var myObj = {a: 1, b: 2, c: 3}, myKeys = [];

for (var property in myObj) {
	myKeys.push(property);
}

myKeys; 