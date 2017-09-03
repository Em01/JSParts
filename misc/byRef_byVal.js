var a;
function myFunction(a) {

}

//when you pass a into myFunction are you passing by value or by reference?

/*
Primitive types are passed by value:
* Number
* Boolean
* String
* Null
* Undefined
* Symbol

Objects are passed by reference
*/


var a = 1;

function myFunction(a) {
  a = 2;
}
foo(a);
console.log(a)
//will return 1
//a inside myFunction is a copy of the a value because primitives are passed by value.


/*Pass by reference passes in something that points to something else and is not a copy of the object.
If you change a property on the object it will be reflected in the object both
inside and outside the function.
*/

var a = {}

function myFunction(a) {
  a.moo = true
}

console.log(a);
// would return a { moo: true }
//You can't however change what a points to. You can add a property or change a property
// but you can't change what it points to-

var a = {
  'moo': 'too'
}

function test (a) {
  a = { 'too': 'moo'}
}

console.log(a)
// a = { 'moo': 'too' }
