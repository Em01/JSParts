//preventDefault will prevent the browser submitting.
//serialize will merge all fields for the submission.
//attr(<attribute>, <value>)

$('form').on('submit', function(event) {
  event.preventDefault();
  var form = $(this);
  $.ajax('/something', {
    type: 'POST',
    data: this.serialize(),
    success: function(result) {
      this.remove();
      $('#vacation').html(result).fadeIn();
    }
  });
});

//JSON

$('form').on('submit', function(event){
  event.preventDefault();
  var form = $(this);
  $.ajax($('form').attr('action'), {
    type: 'POST',
    data: this.serialize(),
    contentType: 'application/json',
    dataType: 'json',
    success: function(result) {
      form.remove();
      var mes = $("<p></p>");
      mes.append("Price: " + result.totalPrice + " ");
      $('#vacation').html(result).fadeIn();
    }
  });
});

//getJSON
$('button').on('click', function() {
  $.getJSON('/cities/deals',function(result) {
    $.each(result, function(index, dealItem) {
      var dealElement = $('.deal-' + index);
      dealElement.find('.name').html(dealItem.name);
      dealElement.find('.price').html(dealItem.price);
    });
  });
});
