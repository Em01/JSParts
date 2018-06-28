const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middlewarelogger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); //default and optional setting

app.get('env');
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);
app.use(helmet());
app.use('/api/courses', courses); //any route starting with api/courses use courses router
app.use('/', home); //any route starting with api/courses use courses router

if(app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
}

debug('connected to the database');

const PORT = process.env.port || 3000;
app.listen(3000, () => console.log(`Listening on port: ${PORT}`));
