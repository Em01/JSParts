function Employee() {}
    
    Employee.prototype.firstName = "Anna";
    Employee.prototype.lastName = "Todd";
    Employee.prototype.startDate = new Date();
    Employee.prototype.signedNDA = true;
    Employee.prototype.fullName = function (){
    console.log(this.firstName + " " + this.lastName);
};

var anna = new Employee()
console.log(anna.fullName());
console.log(anna.signedNDA);

