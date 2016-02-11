//iterators must have a next method -> returns a result in the following format:
//{value: Any, done: Boolean}

function myIterator(array) {
  var nextIndex = 0;

  return {
    next: function() {
      return nextIndex < array.length ?
      {value: array[nextIndex++], done: false} :
      {done: true};
    }
  };
}
//now initialized the next method can be called to access kv pairs in turn from the object
var iteratee = myIterator(['yo', 'ya']);
console.log(it.next().value); //yo
console.log(it.next().value); //ya
console.log(it.next().done); //true
