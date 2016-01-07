var car = new Object();
car.age = 5;
car.make = "Toyota";
car.color = "Red";

function car(age, make, color) {
    this.age = age;
    this.make = make;
    this.color = color;
};

var myFord = new Car(3, "Ford", "Black");


var dog = new Object();
name = "Alfie";
age = 2;
breed = "Airedale";
color = "Brown";

function dog(name, age, breed, color) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
}
var spaniel = new Dog("Meg", 5, "Spaniel", "Brown");


