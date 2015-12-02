var myBox = {};

var f = "f";

myBox[f + "oo"] = "bar";
myBox["name"] = "Emma";
myBox["location"] = "England";


//within a loop

var bar = object.baz.foo.bar;
var count = 0;

for (var i = 1; i< 100; i++) {
	count += bar;
}




function listGuns(guns) {
  for (var speargun in guns) {
    console.log("Behold! " + speargun + ", with " +
                guns[speargun]["heft"] + " heft!");
  }
}