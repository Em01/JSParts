/*
 * Iterate through items in an array - $.each()
$.each(collectionName, function(<index>, <object>){})
*/
var numbers = [1, 2, 3];
$.each(numbers, function(index, numbers){
  var result = numbers + index;
});
//1 0, 2 1
//
/* An array of results with $.map() -
 * args are switched-returns a modified array
 * determined by the arguments
 * $.map(collection, function(<item>, <index>){});
*/
var myNumbers = [1, 2, 3, 4];
var myNewNumbers = $.map(myNumbers, function(item, index){ 
  return item + 1;
});
//returns 2, 3, 4, 5
