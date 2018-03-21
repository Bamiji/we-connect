'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

var _businesses = require('./routes/businesses');

var _businesses2 = _interopRequireDefault(_businesses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use('/', _index2.default);
app.use('/auth', _auth2.default);
app.use('/businesses', _businesses2.default);

app.listen(3000);

module.exports = app;
