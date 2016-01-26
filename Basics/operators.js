var obj = {
  valueOf: function() {
    return 100;
  }
};
var total = 300 - obj;
console.log(total);
//returns 200

var total = 300 - NaN;
console.log(total);
// -> NaN

var total = 300 - "";
console.log(total);
// -> 300 -empty string converted into a 0

var total = 4 * "XYZ";
//-> NaN

var total = 9 / 0;
// -> Infinity

var total = 9 / "3";
// -> 3

var level;
console.log(++level);
//NaN

var value = -9;
value = +value;
console.log(value);
// -> returns -9

var num1 = parseInt('1010', 2);
var num2 = parseInt('0110', 2);
var total = num1 & num2;
console.log(total.toString(2));
//10

var num1 = parseInt('0001', 2);
num1 = num1 << 2;
console.log(num1.toString(2));
//100

var num1 = -parseInt('1000', 2);
num1 = num1 >> 3;
console.log(num1.toString(2));
//-1

//!! converts to boolean value
var value = !!false;
conole.log(value);
//false

var obj = {
  calc: 'Logic'
};
var value = obj && 99;
console.log(value);
//99 as second operand

var value = null && 99;
console.log(value);
//null

if (true == 2)
  console.log('true');
else
  console.log('false');
//false

if(true == 1)
  console.log('true');
else
  console.log('false');
//true

if (null == undefined)
  console.log('true');
else
  console.log('false');
//true

if("Beta" < "alpha")
  console.log('true');
else
  console.log('false');
//Ascii upercase come before lowercase

var total = (99, 88, 44);
console.log(total);
//44


var entries = new Array('Trains', 'Plains', 'Automobiles');
console.log(entries instanceof Array);
//true
