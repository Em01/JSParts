var myGlobal1 = "Global variable 1";

function myFunction() {
	var myLocal1 = "Local variable 1";
	myLocal2 = "Local variable 2";
	window.myGlobal2 = "Global variable 2";
}
myFunction();

console.log(myGlobal1);
console.log(myLocal2);

//Global
var globalOne = "Global variable one";

//local
function dog(danny){
	var millie = "local dog";
	betty = "Global Dog";
	window.billy = "Another Global dog sat on the window";
}
dog("Is another Global dog");


var globalCat = "Mog";

function cat(catLocal) {
	var catOne = "This is a local cat";
	catTwo = "This is a global cat";
	window.tabby = "Tabby is a global cat";
}

cat("Another local cat");