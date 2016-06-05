//Deferred promise
var deferred = $.Deferred();

deferred.resolve("hello world");

deferred.done(function(value) {
  alert(value);
});

//

function getPromise() {
  var deferred = $.Deferred();

  setTimeout(function() {
    deferred.resolve("good");
  }, 1000);

  return deferred.promise();
}

$.when( getPromise() ).done(function(value) {
  alert(value);
});
