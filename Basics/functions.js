//count the Es in a phrase

function countE() {
	var phrase = prompt("Which phrase would you like to examine?");
	if (typeOf(phrase) != "string") {
		alert("That is not a valid entry!");
		return false;
	} else {
		var eCount = 0;
		for (var index = 0; index < phrase.length; index++) {
			if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E')
				eCount++;
		}
	}
	alert("There are " + eCount + " E's in \"" + phrase + "\".");
	return true;

}

countE();


//IIF
( function ( ) {
	alert("Quick! You've got a Fast Pass to " + pass + "!");
} )();

//Treat an array of functions like a queue. Pass the result of each function into the next queue
//until the queue is empty
var list = [
	function(a) { return 8 * a; },
	function(a) { return (a - 2) * (a - 3); },
	function(a) { return a* a; }
];

var applyAndEmpty = function(input, queue) {
	var length = queue.length;
	for(var i = 0; i < length; i++){
		input = queue.shift()(input);
	}
	return input;
};

alert(applyAndEmpty(start, list));
