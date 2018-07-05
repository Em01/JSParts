const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-excercises')
  .then(() => console.log('Connected to mongodb...'))
  .catch(() => console.log('could not connect'))

  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
  })

  const Course = mongoose.model('Course', courseSchema);

  async function backendCourses() {
    return await Course
    .find({ isPublished: true, tags: 'backend'})
    .sort({ name: 1 }) //.sort('name') or .sort('-name')
    .select({ name: 1, author: 1 }) //.select('name', suthor)
  }

async function run() {
  const courses = await backendCourses()
  console.log(courses)
}

run();
