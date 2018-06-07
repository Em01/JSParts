const EventEmitter = require('events');
//Use of upper casing here because EventEmitter is a class.
const emitter = new EventEmitter();


//Register a listener-on or add listener are the same. name of event + callback of actual listener.
emitter.on('messageLogged', (arg) => {
  console.log('listener called', arg);
});

// emitter.on('logging', (arg) => {
//   console.log('listener called', arg);
// });

// //raise event
// emitter.emit('messageLogged', { id: 1, url: 'http://' });
// //used to raise an event with name of the event as the parameter.
//
// emitter.emit('logging', { data: message });
