var context = new window.AudioContext() || new window.webkitAudioContext();
//create the context which is the object that will create other objects.
  osc = context.createOscillator();

osc.frequency.value = 440;
osc.connect(context.destination);
osc.type = "square"; //triangle/sawtooth
//osc.start();
