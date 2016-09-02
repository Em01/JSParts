//ajax method $.ajax(url[, settings])

$('.confirmation').on('click', 'button', function(){
  $.ajax('http.....', {
    success: function(repsonse){
      //only runs after the server has recieved a response.
      $('.ticket').html(response).slideDown();
    },
    data: { "confNum": 1234}
  //data: {"confNum": $(".ticket").data("confNum") }
  });
});

//shorthand method-get
//$.get(url, success)

$.get('url.html', function(response){
  $('.ticket').html(response).slideDown();
});
