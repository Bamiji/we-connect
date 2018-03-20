const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const auth = require('./routes/auth');
const businesses = require('./routes/businesses');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/auth', auth);
app.use('/businesses', businesses);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;
