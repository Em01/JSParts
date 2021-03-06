// Your Javascript Code Goes Here
//FUNCTION STATEMENT
function statementFunc() {
  console.log('i am a function statement');
}

statementFunc()

  //functions in js are first class so you can give a func a func
  function logStatement(fn) {
    fn()
  }

logStatement(statementFunc)

//FUNCTION EXPRESSION
//the example is annonymous, still first class because you can pass it around
var greetMe = function() {
  console.log('hi');
}

greetMe()
//its first class
logStatement(greetMe)

//Use a function expression on the fly
logStatement(function() {
  console.log('hello')
})

