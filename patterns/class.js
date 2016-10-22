function Car(model){
  this.model = model;
  this.color = color;

  this.getInfo = function(){
    return this.model + ' ' + this.color;
  };
}

//Instantiate
var myCar = new Car('Ford');
console.log(myCar.getInfo());


function Car(model, year, miles){
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function(){
  return this.model + " " + this.year
};

var civic = new Car("Honda", 200, 1999);
console.log(civic.toString);

//Object.prototype.x will add the method to be shared amongst all instances once
//the base object has been created.
