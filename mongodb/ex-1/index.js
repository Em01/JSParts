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

  // async function getCourses() {
  //   return await Course
  //   .find({ isPublished: true, tags: 'backend'})
  //   .sort({ name: 1 }) //.sort('name') or .sort('-name')
  //   .select({ name: 1, author: 1 }) //.select('name', suthor)
  // }

  // async function getCourses() {
  //   return await Course
  //   .find({ isPublished: true })
  //   .or([ { tags: 'frontend'}, { tags: 'backend' }])
  //   .sort({ price: -1 }) //.sort('name') or .sort('-name')
  //   .select({ name: 1, author: 1, price: 1 }) //.select('name', suthor)
  // }

  async function getCourses() {
    return await Course
    .find({ isPublished: true })
    .or([
      { price: { $gte: 15 } },
      { name: /.*by.*/i }
    ])

    // .or([ { title: 'frontend'}, { tags: 'backend' }])
    .sort({ price: -1 }) //.sort('name') or .sort('-name')
    .select({ name: 1, author: 1, price: 1 }) //.select('name', suthor)
  }

async function run() {
  const courses = await getCourses()
  console.log(courses)
}

run();
