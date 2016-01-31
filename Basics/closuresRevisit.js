//Basic Example

function testClosure(){
	var x = 4;

	function closeX(){
		return x;
	}
	return closeX;
}

var checkLocalX = testClosure();
checkLocalX();

//Additional basic example

function color() {
	var outer = "Red";

		function newColor() {
			return outer;
		}
	return newColor;
}

var imageBackground = color();
imageBackground();

//build cove ticket maker

function buildCoveTicketMaker(transport){

	return function( name ) {
		alert("Here is your transportation via the " + transport + ".\n" + 
			"Welcome to the Cold Closures Cove, " + name + "!");
	};

}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
var getSeagullTicket = buildCoveTicketMaker("Giant Seagull");

getSubmarineTicket("Mario");
getBattleshipTicket("Luigi");
getSeagullTicket("Bow");


//modifying bound values after closure

function buildCoveTicketMaker(){
	var passengerNumber = 0;
		return function ( name ){
			passengerNumber++;
			alert("Here is your ticket via the " + transport +
			 "\n." + "Welcome to the Cove " + name + "!" +
			 "You are passenger #" + passengerNumber + ".");
		};
}
var getSubmarineTicket = buildCoveTicketMaker("Submarine");
getSubmarineTicket("Mario");


//function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push(location);
    for (var i = 0; i < zones.length; i++) {
      list += zones[i] + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
};

function assignTorpedo ( name, passengerArray ) {
	// var torpedoAssignment;
	for (var i = 0; i<passengerArray; i++){
		if(passengerArray[i] == name){
			return function() {
				alert("Ahoy, " + name + "!\n" +
					"Man your post at Torpedo #" + (i+1) + "!");
			};
		}
	}
	return torpedoAssignment;
}

var subPassengers = ["Luke", "Leila", "Han", "Charlie"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
giveAssignment();

//new example

function speak(greeting) {
  return function(name) {
    alert(speak + ' ' + name);
  };
}

speak('Hi')('Abby');


//additional
function add(x) {
  return function(y) {
    return x + y;
  };
}
console.log(add(3)(5));


function subtract(x) {
  return function(y) {
    return x - y;
  };
}

console.log(subtract(x)(y));

var priceUpdate = function (cost) {
  var currentCost = cost;
  var generator = function() {
    cost *= 2;
    return currentCost;
  };
  return generator;
};

var updateFn = priceUpdate(50000);
console.log(updateFn());
//100000
