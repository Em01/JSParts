var chatModule = (function () {

  var leadself = 'Me: ',
    leadcomputer = "PC: ",
    aSaid = ["is a Cyber Chat"],
    msgYes = "Yes, that's a great idea.",
    msgNo = "No, that must be a mistake.",
    aSassyStuff = [
  "Like mold on books, grow myths on history.",
    "She moved like a poem and smiled like a sphinx.",
    "As long as we don’t die, is gonna be one hell of a story.",
    "She laughed, and the desert sang.",
    "You’ve got about as much charm as a dead slug."
  ];

function echo (msg){
  aSaid.push("<div>" + msg + "</div>");

  var aSaidLength = aSaid.length,
    start = Math.max(aSaidLength - 6,0),
    out = "";

  for(var i = start; i<aSaidLength; i++){
    out += aSaid[i]; 
  }

  $('.advert').html(out);
  $('#talk span').text(msg);
};

return {
  talk: function(msg){ 
    echo(leadSelf +msg);
  },
    replyYesNo: function(){
      var msg = Math.random()>.5 ? msgYes : msgNo;
      echo(leadcomputer + msg);
    },
    saySassyStuff: function(){
      var msg = aSassyStuff[ Math.floor(Math.random() * aSassyStuff.length) ];
      echo(leadComputer + msg);
    }
}
})();

console.log(echo);
console.log(chatModule.echo);
//The above will be undefined as secure.


$(document).ready(function(){
  chatModule.talk("this is great");
  chatModule.replayYesNo();
  chatModule.saySassyStuff();
});
