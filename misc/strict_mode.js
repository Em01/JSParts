"use strict";

function testFunction() {
  "use strict";
  //test code
}

/*
Enables strict mode
Allows you to place a program or a function in strict operating mode
This makes debugging easier because you are alerted to errors and their location
that you otherwise would miss silently.

It is not a keyword. It is a string because when it was implemented older
browsers did not support it so by using a string they would ignore it.
*/


//Using a variable before it has been defined will throw an error-use var to declare
//Without strict mode-no error would be raised but the code would run:
//In strict mode you would get "uncaught reference error: mVar is not defined"
var myVar = 1;
mVar = 2;

if(myVar > 1) {
  console.log("Hello")
}


//Stops you using words reserved in future versions of JavaScript
//non strict mode fails silently
//strict mode raises an error - unexpected strict mode reserved word
var let = 1;


//You cannot delete anu functions, Variables or function arguments in use strict mode
var foo = 1;
delete foo;
// uncaught syntax error


//Makes eval keyword a bit safer
// In non strict mode the following will run because the a leaks out of the eval
//In strict mode leaks dont happen.

eval("var a = 1");
console.log(a);
//1
