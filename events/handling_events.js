/*
-body of HTML
<input id="submit1" type="button"
  onclick ="submitForm(this)" />
*/
function submitForm(element) {
  console.log(element.id);
}
//submit1- this in event handlers gets set to the element that we are working with. 

/*
<input id-"submit1" type="button"
  pnclick="submitForm(this, event)' />
*/

function submitForm(element, event) {
  console.log(event.type);
}
//click
