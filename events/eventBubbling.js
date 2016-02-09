//for two divs parent and child-setting a background color of a square

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');

var clickHandler = function divClickHandler(event) {
  console.log(this.id); //this is set to the current dom element.
  //event.stopPropagation(); would not allow the children a chance to handle the event.
  //event.preventDefault(); used alot with stopProp - stops default action of whatever was clicked etc.
};

div1.addEventListener('click', clickHandler, false);
div2.addEventListener('click', clickHandler, false);

//If the parent needed the first chance at handling the event then true should
//instead be passed in-capture phase.

