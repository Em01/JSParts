$('.test').on('click', 'button', function(){

});

//preventDefault to prevent the default behaviour of the browser.
//stopPropagation- stops events from bubbling.
$(document).ready(function(){
  $('.vacation').on('click', '.expand',
    function(event) {
      event.preventDefault();
    }
  );
});
