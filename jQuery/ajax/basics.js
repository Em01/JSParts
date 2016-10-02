//ajax method $.ajax(url[, settings])

$(document).ready(function(){
  $("#tour").on("click", "button", function(){
    $.ajax('/photos.html', {
      success: function(response){
        $('.photos').html(response).fadeIn();
      },
      error: function(){
        $('.photos').html('<li>Error</li>');
      },
      timeout: 3000,
      beforeSend: function(){
        $("#tour").addClass('done');
      },
      complete: function(){
        $("#tour").removeClass('done');
      }
    })
  })
});


//shorthand method-get
//$.get(url, success)

$.get('url.html', function(response){
  $('.ticket').html(response).slideDown();
});

//consider using objects as follows

var confirmation = {
  init: function(){
  }
}

$(document).ready(function(){
  confirmation.init();
});

//detach() remove and preserve and then can appendTo();
