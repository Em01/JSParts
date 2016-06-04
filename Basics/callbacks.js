$("#btn_1").click(function(){
  alert("hi");
});
//click is a function which takes a callback as its parameter it then calls or executes it.
//$("btn_1).click(function(){ alert("Hi"); });

var dogs = ["Alfie", "Millie"];

dogs.forEach(function(eachName, index){
  console.log(index + 1 + "." + eachName);
});
//anonymous function is passed to forEach()

