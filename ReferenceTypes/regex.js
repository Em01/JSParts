var blogText = "Sam I Am";
var pattern = new RegExp('am', 'g');
console.log(pattern instanceof RegExp);
//true

var blogText = "Sam I Am";
var pattern = /am/g;
console.log(pattern instanceof RegExp);
//true

var blogText = "Sam I Am";
var pattern = /bam/g;
console.log(pattern.test(BlogText));
//false

var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result);
//["m", index: 2, input: "Sam I Am"]

var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.index);
//2

var blogText = "Sam I Am";
var pattern = /m/g;
var result = blogText.match(pattern);
console.log(result);
//["m","m"]

var blogText = "Sam I Am";
var pattern = /[aA]m/g;
var result = blogText.match(pattern);
console.log(result);
//["am", "Am"];
