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
