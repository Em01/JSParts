const EventEmitter = require('events');
var url = 'http://mylogger.io/url';

class Logger extends EventEmitter {
  log(message) {
    console.log(message)
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

module.exports = Logger;
