$(function() {
  
  var selections = [];
  $(".niners").click(function() { //access selections
    selections.push(this.prop("name"));
  });
});
