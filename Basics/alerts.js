var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;

while (ageIsCorrect == false) {
  if (confirm("You entered " + userAge + ". Is this correct?")) {
    ageIsCorrect = true;
    alert("Great! Your age is logged as " + userAge + ".");
  } else {
    userAge = prompt("What's your age, user?");
  }
}
