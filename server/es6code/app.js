import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import index from './routes/index';
import auth from './routes/auth';
import businesses from './routes/businesses';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/auth', auth);
app.use('/businesses', businesses);

app.listen(3000);

module.exports = app;
