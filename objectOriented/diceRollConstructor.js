function Dice(sides) {
	this.sides = sides;
	this.roll = diceRoll;
}

Dice.prototype.roll = function(){
	var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	return randomNumber;	
};

var dice = new Dice(5);
var dice10 = new Dice(10);