function sayHi() {
  if (arguments[0] == "emma") {
    return;
  }
  alert(arguments[0]);
}

function howMany() {
  alert(arguments.length);
}

howMany(1);
//1
