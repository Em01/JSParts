var Employee = function(name) {
  this.name = name;
};
var newEmployee = new Employee('jj');
console.log(typeof newEmployee);
//function
console.log(typeof Employee.prototype);
//object
