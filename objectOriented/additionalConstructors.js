function Shoe (shoeSize, shoeColor, forGender, constructStyle) {
  this.size = shoeSize;
  this.color = shoeColor;
  this.gender = forGender;
  this.construction = constructStyle;
}

Shoe.prototype = { 
  putOn: function() { alert("Shoe on"); },
  takeOff: function() { alert("Shoe off"); }
};

var beachShoe = new Shoe( 10, "blue", "women", "flipflop" );
beachShoe.putOn();
beachShoe.straps = 2;
beachShoe.hasOwnProperty("construction");
