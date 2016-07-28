//append-inserts at the end of the element specified
$(document).ready(function(){
  var price = $('<p>The price</p>');
  $('.vacations').append(price);
});

//REMOVE

$('.button').remove();

//appendTo
price.appendTo($('.vacations'));

//appendAfter
price.appendAfter($('.vacations'));

//insertAfter
price.insertAfter($('.vacations'));

//insertBefore
price.insertBefore($('.vacations'));

