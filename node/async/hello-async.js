setTimeout(function(){
	console.log('hello')
}, 1000);

console.log('hello');

function printInTwoSeconds(message){
  setTimeout(function(){
    console.log('message');
  }, 2000);
}

printInTwoSeconds('hi');
