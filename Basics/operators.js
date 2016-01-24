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
