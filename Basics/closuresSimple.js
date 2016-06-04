//Simple basic example of a closue

var message = "Hello World!";

function sayHelloWorld(){
  alert(message);
}

sayHelloWorld();

//more complex example-fn inside a fn

var iBaseNum = 10;

function addNumbers(iNum1, iNum2) {

  function doAddition() {
    return iNum1 + iNum2 + iBaseNum;
  }
  return doAddition();
}

//
function showName(firstName, lastName) {
  var nameIntro = "Your name is ";
  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }
  return makeFullName();
}
showName("Super", "Man");

//Consider that closures have access even after the outer function returns.

function showName(firstName, lastName) {
  var nameIntro = "My name is ";
  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }
  return makeFullName();
}

var me = showName("Emma"); //this returns the outer function
me("Again"); //closure still has access to the outers functions and vars

function numGen() {
  var num = 1;

  function checkNum(){
    console.log(num);
  }
  num++;
  return checkNum();
}

var number = numGen();
number(); //2
