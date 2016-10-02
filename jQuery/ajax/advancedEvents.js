//$('button').off('click'); turns off all click events-use event namespacing
//in order to turn off individual events
//trigger-triggers the event as if it happened-
//$('button').trigger('click');

function status() { console.log('status function')};
function picture() { console.log('picture function')};

$(document).ready(function(){
  $('button').on('click.image', picture); //when user clicks image-calls picture fn
  $('button').on('click.details', status);

  $('button').off('click.image');
  $('button').trigger('click');
});
