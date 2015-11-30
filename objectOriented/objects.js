var booksArray = ["Peter Pan", "Alice in Wonderland", "Mog"];

var myBox = {
	height: 6,
	material: "cardboard",
	contents: booksArray,
	"# of stops": 2
};
console.log(myBox.height);
myBox.material = "plastic";
console.log(myBox.material);

myBox.contents.push("On the Road");

console.log(myBox.contents);

myBox.weight = 24;

myBox["height"] = 10;
console.log( myBox["material"]);

for(var i = 0; i <= myBox["# of stops"]; i++) {
	console.log( myBox["destination" + i]);
};

delete myBox.contents;

function addBook (box, name, writer){
	box["# of Books"]++;
	box["book" + box["# of Books"]] = {title: name, author: writer};
}

addBook(myBox, "Great Expectations", "Dickens");

console.log( myBox.book1.title );
console.log( myBox["book4"]["author"] );





var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

var vehicles = [vehicle1, vehicle2, vehicle3];

var findVehicle = function(name, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].type == name) {
      return list[i].storedAt;
    }
  }
};

findVehicle("Submarine", vehicles);






var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

vehicle1["# of weapons"] = 1;
vehicle2["# of weapons"] = 4;
vehicle3["# of weapons"] = 8;