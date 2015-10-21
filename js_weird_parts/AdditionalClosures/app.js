function buildFunctions() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(

			function() {
				console.log(i);
			}
		)
	}

	return arr;

}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


//will return 
//3
//3
//3





//If you want access to the other variables


function buildFunctions2() {

	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			(function(j) {
				return function() {
					console.log(j);
				};
			}(i))
		)
	}

	return arr;

}


var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();


