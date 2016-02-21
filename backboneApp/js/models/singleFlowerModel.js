//namespace the app
var app = app || {};

//assign singleFlower variable to app to prevent conflicts and extend Backbone Model.
app.singleFlower = Backbone.Model.extend({

//Set defaults as fallbacks in case instances do not define.
  defaults: {
    color: "pink",
    img: "images/placeholder.svg"
  },
});
