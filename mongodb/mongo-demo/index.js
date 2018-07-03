const mongoose = require('mongoose');

//references the mongodb that we installed-when you deploy you change for prod env & use config settings.
//connect returns a promise.
mongoose.connect('mongodb://localhost/myapp')
  .then(() => console.log('connected to mongodb...'))
  .catch((err) => console.error('could not connect to mongodb', err));


const course = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  data: {
    type: Date,
    default: Date.now
  },
  isPublished: Boolean
})
