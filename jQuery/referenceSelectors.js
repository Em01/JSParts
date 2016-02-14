$(document).ready(function() {
});

$(document).ready(function() {
  $('div, span').css('propName', 'value');
});

$(document).ready(function() {
  $('div').each(function() {
    alert($(this).html());
  });
});

//ID Selector
$('#myID');

$document.ready(function() {
  alert($('#myDiv').html());
});
//could do:
$(document).ready(function() {
  document.getElementById('TestDiv');
});

//ClassName selector
$('.myClass');
$('.myClassOne, .myClassTwo');
$('a.myClass'); //much more efficent

//attribute
$('a[title]');
//specific attribute value
$('a[title="Programming"]');
