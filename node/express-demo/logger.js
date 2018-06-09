function log(req, res, next) {
  console.log('Logging...');
  next()
}

// app.use(function(req, res, next) {
//   console.log('Authenticating')
//   next();
// });

module.exports = log;
