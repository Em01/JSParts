function Car(make, model, year) { 
    this.make = make;
    this.model = model;
    this.year = year;
}

var myCar = new Car("Ford" , "A", 1993);
var myCarTwo = new Car("Toyota", "B", 1988);
myCarTwo.color = "Red";
