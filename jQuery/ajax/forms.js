//preventDefault will prevent the browser submitting.
//serialize will merge all fields for the submission.
//attr(<attribute>, <value>)

$('form').on('submit', function(event){
  event.preventDefault();
  var form = $(this);
  $.ajax('/book', {
    type: 'POST',
    data: form.serialize(),
    success: function(results){
    }
  });
});
