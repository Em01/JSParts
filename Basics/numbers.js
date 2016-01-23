//octal - begin 0 - base of 8
var oct = 070;
console.log(oct);
// -> returns 56 (octal 070)

var oct = 088;
console.log(oct);
// -> returns 88 as if dec number

//strict mode returns syntax error

//hex - begin 0x
var hex = 0x10;
console.log(hex);
// -> returns 16

//e represents number 10 raised to x power
var value = 3.2e4;
console.log(value);
// -> returns 32000

var value = 3.2e-4;
console.log(value);
//returns -> 0.00032

console.log(Number.MAX_VALUE);
// -> returns 1.797.....

console.log(Number.MIN_VALUE);
// -> returns 5e-324

var n = Number.MAX_VALUE * 2;
console.log(n);
// -> returns infinity

var n = Infinity;
console.log(typeof n);
// -> shows number

var n = Infinity;
console.log(n);
// -> returns -Infinity

console.log(Number.POSITIVE_INIFINITY + ' ' + Number.NEGATIVE_INFINITY);
// -> returns Infinity -Infinity

var count;
var price = 5.00;

console.log(price / count);
// -> returns NaN not an exception

console.log(typeof NaN);
// -> returns "number" -data type number

var n = NaN;
if(isNaN(n))
  console.log('NaN!');
