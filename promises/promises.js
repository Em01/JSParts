/*
var jsonPromise = getJSON('/profile.json');
jsonPromise.then(<fulfil handler>, <reject handler>);
jsonPromise.then(renderProfile, displayError);
*/
getJson("/profile.json").then(renderProfile, displayError);

getJson("/profile.json").then(renderProfile).catch(displayError);

///
setTimeout(function(){
  console.log(1 + 1);
}, 1000);

var calculationPromise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve(1 + 1);
  }, 1000);
});

function addTwo(value){
  return value + 2;
}

function printFinalValue(nextValue) {
  console.log("the final value is", nextValue);
}
calculationPromise
  .then(addTwo)
  .then(addTwo)
  .then(printFinalValue);
