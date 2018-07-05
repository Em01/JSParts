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

async function getCourses() {
  const courses = await Course
  // .find({ author: 'Mosh', isPublished: true })
  // .find({ price: { $gte: 10, lte: 20 } })
  .find({ price: { $in: [10, 15, 20] } })
  .limit(10)
  .sort({ name: 1 }) //1 indicates ascending order, -1 is descending
  .select({ name: 1, tags: 1})
  console.log(courses)
}

getCourses();
