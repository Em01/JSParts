//_.each -> Iterate -> Min two args:
//1. collection to iterate over
//2. iterator function invoked for each item in the collection
//3. Optional context in which the iterator should run setting value of this.
var myDogs = [
  {
    name: "collie",
    age: 12
  },
  {
    name: "pug",
    age: 2
  }
];

_.each(myDogs, function(element) {
  console.log(element.length);
});

_.each(["A", "B", "C"], console.log);
