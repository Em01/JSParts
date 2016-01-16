function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
};

//Add the showNameAndCol method to the Plant prototype property

Plant.prototype.showNameAndColor = function() {
    console.log("I am a" + this.name + "and my color is" + this.color);
};

//Add the amIOrganic method to the Plant prototype property

Plant.prototype.amIOrganic = function() {
    if(this.isOrganic) 
    console.log("I am organic");
};

function Fruit(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

//Set the Fruit's prototype to Plant's constructor, thus inheriting all of the Plant prototype methods and properties.

Fruit.prototype = new Plant();

//create a new object, bannana with the fruit constructor

var aBannana = newFruit("Bannana", "Yellow");



