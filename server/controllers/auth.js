'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function signUp(req, res) {
  var name = req.body.name;


  res.send('User ' + name + ' has been registered.');
}

function logIn(req, res) {
  var user = { name: 'banji', password: 'banji' };
  var _req$body = req.body,
      name = _req$body.name,
      password = _req$body.password;


  if (name === user.name && password === user.password) {
    res.send('User ' + name + ' has been logged in.');
  } else {
    res.send('Login failed.');
  }
}

exports.signUp = signUp;
exports.logIn = logIn;