//Namespace
var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({
 //collection needs to look at my singleFlower model when it starts to add instances to its group.
 
  model: app.singleFlower

});
