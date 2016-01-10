ver person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () { 
    console.log(this.firstName + " " + this.lastName);
    //could have written
    console.log(person.firstName + " " + person.lastName);
    }
}
    
