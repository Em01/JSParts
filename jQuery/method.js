$(document).ready(function(){
  $('.test').on('click', function(){
    $(this).closest('.test').find('.tester').slideDown();
  });
});
//closest searches up
//find searches down through children
//slideToggle

$(document).ready(function(){
  $('#tour').on('click', 'button', function(){
    $('.photos').slideToggle();
  });
});
