//valueOf()
var Tornado = function(category, affectedAreas, windGust) {
  this.category = category;
  this.affectedAreas = affectedAreas;
  this.windGust = windGust;
};

var cities = [ ["Kansas City", 345], ["New York", 567], ["Boston", 23456] ];
var twister = new Tornado( "F5", cities, 220);

Tornado.prototype.valueOf = function() {
  var sum = 0;
  for (var i = 1; i < this.affectedAreas.length; i++) {
    sum += this.affectedAreas[i][1];
  }
  return sum;
};

Tornado.prototype.toString = function() {
  var list = " ";
  for (var i = 0; i < this.affectedAreas.length; i++) {
    if(i < this.affectedAreas.length - 1) {
      list = list + this.affectedAreas[i][0] + ", ";
    } else {
      list = list + "and" + this.affectedAread[i][0]; 
    }

    return "this tornado has been classified as an " + this.category;
  }
};

twister.toString();

//finding an objects prototype and its constructor

//twister.constructor;
//twister.constructor.prototype;
//or just the prototype:
//twister.__proto__;
