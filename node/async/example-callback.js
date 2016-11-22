var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial';

request({
  url: url,
  json: true
}, function(error, response, body) {

});
