/*
A variable is a container that stores a value.
Variables are declared with the var keyword.

var myVariable;
myVariable = 'Tim';

this is the same as doing:
var myVariable = 'Tim';
It is quite common to initialize a variable to a value on the same line of which
it is declared.

if you call myVariable you will get 'Tim' as the return value

Once you give the variable a value you can change the value later. This is to
do with how JavaScript stores the values.

var myVariable = 'Bob';
console.log(myVariable)
//Bob
myVariable = 'Steve'
console.log(myVariable)
//Steve

Naming Rules:
Cannot start with a number-the variable can have numbers in it.
No maths or logical operator can be included in the variable name.
No punctuation marks of any kind except for an underscore. e.g h:i
No keywords on their own.
Case Sensitive.

DataTypes:
String:
var myVariable = 'Bob';

Number:
var myVariable = 2;

Boolean:
var myVariable = true;

Array:
var myVariable = [1, 2, 3]

Object:
var myVariable = {}

Changing values enables dynamic. Without variables we really wouldn't be able to
do anything.

Think of a variable as a container or label for some data rather than the data
itself. Any of the 7 data types can be stored within a variable. Using the var keyword
you are declaring a variable.

Can be made up of numbers or letters or $ or _. They cannot contain spaces or start
with a number.

To store the variable you use the assignment operator (=)
var bobAge = 2;
Using the assignment operator assigns the value 2 two the variable bobAge.

Udefined: When JavaScript variables are first declared thwir initial value is
undefined. If you try to do something mathamatical to this you will be returned
NaN. If you do this with a string you will get "undefined".

As with functions variables are case sensitive-capitalization is important.
VARONE
VarOne
varone
varOne
The above are all different.
Use camelCase where the first letter of word one is lower case and the first
letter of all remaining words is written in upper case. 
*/
