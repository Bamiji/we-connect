'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/signup', function (req, res) {
  var name = req.body.name;


  res.send('User ' + name + ' has been registered.');
});

router.post('/login', function (req, res) {
  var user = { name: 'banji', password: 'banji' };
  var _req$body = req.body,
      name = _req$body.name,
      password = _req$body.password;


  if (name === user.name && password === user.password) {
    res.send('User ' + name + ' has been logged in.');
  } else {
    res.send('Login failed.');
  }
});

exports.default = router;