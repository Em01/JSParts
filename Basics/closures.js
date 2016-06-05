//Ex1

function outer() {
  myVar = 1;
  function inner() {
    console.log(myVar);
  }
  return inner();
}

//Ex2
function showName(firstName, lastName) {
  var nameIntro = "Your name is ";
  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }
  return makeFullName();
}
showName("Super", "Man");

//Closures store references to the outer fn vars not values

function name() {
  var myName = "Emma";
  return {
    getName: function() {
      return myName;
    },
    setName: function() {
      myName = newName;
    }
  };
}

var nameOne = name();
nameOne.getName(); //Emma
nameOne.setName("Ted");
nameOne.getName(); //Ted

