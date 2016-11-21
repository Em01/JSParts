//Solves problem of Global Scope
var myNamespace = myNamespace || {};

myNamespace = {
  one: 'one',
  two: 'two',

  greet: function(){
    var hi = this.one;
    return hi;
  },

  go: function(){
    var goodbye = this.two;
    return goodbye
  }
};
