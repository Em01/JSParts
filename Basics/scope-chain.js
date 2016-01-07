var myVar = "Global variable";

function grandParent(){
	var myVar = "Grandparent variable";

	function parent(){
		var myVar = "Parent varibale";

		function child(){
			var myvar = "Variable local to the child";
			console.log(myVar);
		}
		child();
		console.log(myVar);
	}
	parent();
	console.log(myvar);
}
grandParent();
console.log(myvar);
