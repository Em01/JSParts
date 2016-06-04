function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms){}
  console.log('Finished fn');
}

function clickHandler() {
  console.log('click event!');
}
//clickHandler happens last because it is on the event queue not the js stack.

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSecond();
console.log('finished execution');
