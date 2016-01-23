console.log(productId);
//returns ReferenceError: productId is not defined

console.log(productId);
var productId = '9000';

//this now returns undefined because the compiler is now aware of it.

var total = price * quantity;
var price = 3;
var quantity = 5;

console.log(total);

//returns NaN price and quantity are known because of hoisting but they are not set yet. undefined * undefined is NaN.


showProduct();

function showProduct() {
  console.log('showing');
}

//this works fine because of declaration
//

showProduct();

var showProduct = function() {
  console.log('showing');
};

/*returns type error. first pass showproduct is hoisted and set to undefined so when we call showProduct its not really a function yet-not until the second pass the showProduct will become a function.
 */
