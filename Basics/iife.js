(function () {
  console.log('Executed');
})();

(function() {
  var name = "Emma";
})();
console.log(name);
//Reference Error

var app = {};
(function (ns) {
  ns.name = 'None';
})(app);

console.log(app.name);
//None

var app = {};
var jQuery = {};

(function (ns, $) {
  ns.name = 'None';
  console.log($ === jQuery);
})(app, jQuery);
//true-can use $ as our jQuery global variable.

+function () {
  var employeeName = 'Jill';
  console.log('Executed!');
}();
console.log(employeeName);
//Reference Error
