//function in a function


function createAdder(baseNumber){
  function add (numberToAdd) {
    return baseNumber + numberToAdd;
  }
  return add
}


var addTen = createAdder(10);
console.log(addTen(2));

function greetMaker(name){
  function greet(){
    var age = 20;
    console.log('hello ' + name);
  }
  return greet;
}

var greetMe = greetMaker('Me');
greetMe();
