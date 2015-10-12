greet();

function greet() {
	console.log('hi');
}

var anonymousGreet = function(){
	console.log('hi');
};

anonymousGreet();

function log(a) {
	console.log(a);
}

log(function() {
	console.log('hi');
});