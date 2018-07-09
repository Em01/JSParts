const mongoose = require('mongoose');

//references the mongodb that we installed-when you deploy you change for prod env & use config settings.
//connect returns a promise.
mongoose.connect('mongodb://localhost/myapp')
  .then(() => console.log('connected to mongodb...'))
  .catch((err) => console.error('could not connect to mongodb', err));


const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 255 },
  category: { type: String, enum: ['web', 'mobile', 'network']},
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: function(v) {
        return v.length > 0
      },
      message: 'A course should have at least one tag.'
    }
  },
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
    category: 'web',
    author: 'Mosh',
    tags: ['node', 'frontend'],
    isPublished: true,
    price: {
      required: function() { return this.isPublished },
      min: 10,
      max: 200
    }
  });
//if is published then price is required
  try {
    const result = await course.save();
    console.log(result);
  } catch (ex) {
    console.log(ex.message)
  }
}

async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
  .find({ author: 'Mosh', isPublished: true })
  .skip((pageNumber -1) * pageSize)
  // .find({ price: { $gte: 10, lte: 20 } })
  // .find({ price: { $in: [10, 15, 20] } })
  // .find()
  // .or([ { author: 'Mosh' }, { isPublished: true} ])
  // .and([ ])
  //starts with
  // .find({ author: /^Mosh/ })
  //
  // //ends with
  // .find({ author: /Hamedani$/i })
  //
  // //Contains mosh
  //
  // .find({ author: /.*Mosh.*/i })
  .limit(pageSize)
  .sort({ name: 1 }) //1 indicates ascending order, -1 is descending
  // .select({ name: 1, tags: 1})
  .count()
  console.log(courses)
}

getCourses();

//QueryFirst
// async function updateCourse(id) {
//   const course = await Course.findById(id);
//   if (!course) return;
//
//   if(course.isPublished) return;
//
//   course.isPublished = true
//   course.author = 'Anoter Author'
//
//   // course.set({
//   //   author: 'another author'
//   // })
//
//   const result = await course.save()
//   console.log(result)
//
// }
//
// updateCourse("5b3e2977e7cb2808d987bd7f")

//UPDATE FIRST

async function updateCourse(id) {
  const course = await Course.findByIdAndUpdate({ _id: id }, {
    $set: {
      author: 'Em',
      isPublished: true
    }
  }, { new: true });
  console.log(course);
}

updateCourse("5b3e2977e7cb2808d987bd7f")


// async function removeCourse(id) {
//   const result = await Course.deleteOne({ _id: id })
//   console.log(result)
// }
//
// removeCourse("5b3e2977e7cb2808d987bd7f")


async function removeCourse(id) {
  // const result = await Course.deleteMany({ _id: id })
  const course = await Course.findByIdAndRemove(id)
  console.log(course)
}

removeCourse("5b3e2977e7cb2808d987bd7f")
