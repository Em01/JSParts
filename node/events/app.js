const EventEmitter = require('events');
//Use of upper casing here because EventEmitter is a class.
const emitter = new EventEmitter();


//Register a listener-on or add listener are the same. name of event + callback of actual listener.
emitter.on('messageLogged', function(){
    console.log('listener called');
});

//raise event
emitter.emit('messageLogged');
//used to raise an event with name of the event as the parameter.
