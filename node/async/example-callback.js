var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial';

request({
  url: url,
  json: true
}, function(error, response, body) {
  if(error){
    console.log('Unable to fetch Weather');
  } else {
    console.log(JSON.stringify(body, null, 4));
    //number of spaces to indent spaces by.
    console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
  }
});
