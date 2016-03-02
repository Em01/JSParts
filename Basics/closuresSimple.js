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
