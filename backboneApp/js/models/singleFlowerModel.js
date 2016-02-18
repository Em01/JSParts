//namespace the app
var app = app || {};

//assign singleFlower variable to app to prevent conflicts and extend Backbone Model.
app.singleFlower = Backbone.Model.extend({

//Set defaults as fallbacks in case instances do not define.
  defaults: {
    color: "pink",
    img: "images/placeholder.svg"
  },
//watch for a change to a model instance property.
  initialize: function() {
    console.log("A model instance name " + this.get("name") + " has been created and it costs " + this.get("price"));
   
    this.on('change', function() {
      console.log("Something in our model has changed");
    });

    this.on('change', function() {
      console.log('The ' + this.get("name") + " model instance just changed!");
    });

    this.on('change:price', function(){
      console.log("The price for the " + this.get('name') + "model just changed to $" + this.get("price") + " dollars");
    });
  }
});
