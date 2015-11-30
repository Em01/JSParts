var aquarium = {
	Nemo: { type: "Fish", species: "Clownfish", length: 3.7},
	Marlin: { type: "Fish", species: "Shark", length: 1.7},
	Dory: { type: "Fish", species: "Clownfish", length: 4.1},
	Peach: { type: "echinoderm", species: "Star fish", length: 3.9},
	"Coral Castle": {type: "environment", material: "coquina", moves: false},
	addCritter: function (name, type, species, length){
		this[name] = {type: type, species: species, length: length};
	}
};

aquarium.takeOut = function(name){
	this[name].name = name;
	var temp = this[name];
	delete this[name];
	return temp;
};

var fishOutOfWater = aquarium.takeOut("Marlin");
console.log( fishOutOfWater);


lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};

lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);