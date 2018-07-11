const mongoose = require('mongoose');

//references the mongodb that we installed-when you deploy you change for prod env & use config settings.
//connect returns a promise.
mongoose.connect('mongodb://localhost/myapp')
  .then(() => console.log('connected to mongodb...'))
  .catch((err) => console.error('could not connect to mongodb', err));


const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    //match: /pattern/
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'network'],
    lowercase: true,
    // uppercase: true,
    trim: true //paddings around string removed
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function(v, callback) {
        setTimeout(() => {
          //filesystem etc async work
          const result = v && v.length > 0
          callback(result)
        }, 1000)
      },
      message: 'A course should have at least one tag.'
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function() { return this.isPublished },
    min: 10,
    max: 200,
    get: v => Math.round(v),  //read
    set: v => Math.round(v)   //set
  }
})

const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    category: 'Web',
    author: 'Mosh',
    tags: ['frontend'],
    isPublished: true,
    price: 15.8
  });
//if is published then price is required
  try {
    const result = await course.save();
    console.log(result, 1);
  } catch (ex) {
    for (field in ex.errors)
      console.log(ex.errors[field].message, 2)
  }
}

async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
  .find({ _id: '5b45645d72013254f0d4fa6a'})

  // .find({ author: 'Mosh', isPublished: true })
  // .skip((pageNumber -1) * pageSize)

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
  // .limit(pageSize)
  .sort({ name: 1 }) //1 indicates ascending order, -1 is descending
  .select({ name: 1, tags: 1, price: 1})
  // .count()
  console.log(courses[0].price)
}

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


// async function removeCourse(id) {
//   // const result = await Course.deleteMany({ _id: id })
//   const course = await Course.findByIdAndRemove(id)
//   console.log(course)
// }
//
// removeCourse("5b3e2977e7cb2808d987bd7f")
getCourses();
