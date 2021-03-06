//Prototype property

function PrintStuff(myDocuments) {
    this.documents = documents;
}

//we add the print() method to the printStuff prototype property so that other instances(objects) can inherit it.

PrintStuff.prototype.print = function () {
    console.log(this.documents);    
};

//create a new object with the PrintStuff constructor, this allows a new object to inherit PrintStuffs properties and methods.

var newObj = new PrintStuff("I am a new object");

//newObj inherited all the properites and methods including the print method from the PrintStuff function. Now newObj can call print directly even though we never created a print() method on it.

newObj.print();




//string prototype add to:

String.prototype.countAll = function(letter) {
  var letterCount = 0;
  for (var i = 0; i<this.length; i++) {
    if ( this.charAt(i).toUpperCase() == letter.toUpperCase() ) {
      letterCount++;
    }
  }
  return letterCount;
};


//object.create

var shoe = {
  size: 6,
  gender: "women",
  construction: "slipper"
};

var magicShoe = Object.create( shoe );

magicShoe.jewels = "ruby";

Object.prototype.isPrototypeOf( shoe );
shoe.isPrototypeOf( magicShoe);


//
var arr = ['red', 'blue', 'green'];
  Object.defineProperty(Array.prototype, 'last',
    {
      get: function() {
        return this[this.length-1];
      }
    });
var last = arr.last;

var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(secretProject.securityLevel);
//2
console.log(typeof secretProject.toString);
//function

/*
- Object.create(project) sets the prototype as project for the new secret project object
*/

var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(secretProject.__proto__.__proto__ === Object.prototype);
//true
