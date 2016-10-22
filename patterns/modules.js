/*
  example defined using object literal notation
  emulates the concept of classes in a way that we are able to 
  include both public/private methods and vars inside a single obect
  thus shielding parts of the global scope.
*/

var myModules = {
  
  myProperty: "some value",

  myConfig: {
    useCaching: true,
    language: "en"
  },

  myMethod: function() {
   console.log("hello");
  },

  myMethod2: function(){
    console.log("hello again");
  },

  myMethod3: function( newConfig ){
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};

//Outputs
myModule.myMethod();
