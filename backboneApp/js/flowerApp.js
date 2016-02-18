var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.svg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomRoses.svg",
  link: "heirloomRose"
});

var tulips = new app.singleFlower({
  name: "tulips",
  color: "yellow",
  price: 19,
  link: "tulip"
});

var fleur = new app.singleFlower({
  name: "fleur",
  price: 9.95,
  color: "green",
  link: "fleur"
});

//array of model instances created up to this point
var flowerGroup = new app.FlowersCollection([
   redRoses, rainbowRoses 
]);

flowerGroup.add(heirloomRoses);

flowerGroup.remove(redRoses);
console.log(flowerGroup.toJSON());

var europeanFlowerGroup = new app.EuropeanFlowerGroup([
  tulips, fleur    
]);

console.log(europeanFlowerGroup.toJSON());

tulips.set('originCountry', 'Holland');
console.log(tulips);



//Change price
//rainbowRoses.set('price', 20);


//console.log(heirloomRoses.toJSON());
//console.log(rainbowRoses.toJSON());
//console.log(redRoses.toJSON());
