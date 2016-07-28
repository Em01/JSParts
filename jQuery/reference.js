//Accesses the dom
$(document);

//Access the h1 element
$("h1");

//Returns text from the h1 element
$("h1").text();

//Replaces the text
$("h1").text("hi");

//Ensure DOM is loaded
$(document).ready(function(){

});

$(document).ready(function(){
  $("h1").text("Hello");
});

//elements inside of id-descendents selector
$("#descendents li");

//direct child
$("destinations > li");

//multiple elements
$(".promo, #france");

//first item -> last/odd/even
$("#destinations li:first");

//add or remove class
$('.vacations').addClass('.test');

$('.vacations').removeClass('.test');
