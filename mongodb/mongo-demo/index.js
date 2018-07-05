const mongoose = require('mongoose');

//references the mongodb that we installed-when you deploy you change for prod env & use config settings.
//connect returns a promise.
mongoose.connect('mongodb://localhost/myapp')
  .then(() => console.log('connected to mongodb...'))
  .catch((err) => console.error('could not connect to mongodb', err));


const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  data: {
    type: Date,
    default: Date.now
  },
  isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['node', 'frontend'],
    isPublished: true
  });
  const result = await course.save();
  console.log(result);
}


createCourse();
