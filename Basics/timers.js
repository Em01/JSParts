console.log(new Date().getSeconds());
setTimeout(function() {
  console.log(new Date().getSeconds());
}, 1000);
// 6 7 -6 seconds in to the minute and one second later it is 7 seconds.

console.log(new Date().getSeconds());
var id = setTimeout(function () {
  console.log(new Date().getSeconds());
}, 1000);
clearTimeout(id);
// 6 seconds in to the minute but with no second number returned.

console.log(new Date().getSeconds());
var id = setInterval(function () {
  var secs = new Date().getSeconds();
  console.log(secs);
  if (secs === 10)
    clearInterval(id);
}, 1000);
// 7 8 9 10 (stops)
