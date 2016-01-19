//object literal

var cat = {
  name: 'Fluffy',
  color: 'White',
  speak: function() {
  display("Meeeow");
  }
};
cat.age = 3;


//display(cat.name);
//display(cat.age);
cat.speak();

//using constructor functions to create objects

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var cat = new Cat('Fluffy', 'White');
//display(cat);



