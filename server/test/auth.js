'use strict';

var _chai = require('chai');

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Signup Route', function () {
  var username = 'Tester';

  it('returns status 200', function (done) {
    _request2.default.post({
      url: 'http://localhost:3000/auth/signup',
      form: { name: username }
    }, function (error, response) {
      (0, _chai.expect)(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns username as registered', function (done) {
    _request2.default.post({
      url: 'http://localhost:3000/auth/signup',
      form: { name: username }
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include(username);
      (0, _chai.expect)(body).to.include('has been registered');
      done();
    });
  });
});

describe('Login Route', function () {
  var username = 'banji';
  var password = 'banji';

  it('returns status 200', function (done) {
    _request2.default.post({
      url: 'http://localhost:3000/auth/login',
      form: { name: username, password: password }
    }, function (error, response) {
      (0, _chai.expect)(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns username as logged in', function (done) {
    _request2.default.post({
      url: 'http://localhost:3000/auth/login',
      form: { name: username, password: password }
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include(username);
      (0, _chai.expect)(body).to.include('has been logged in');
      done();
    });
  });

  it('fails to login unauthenticated', function (done) {
    _request2.default.post({
      url: 'http://localhost:3000/auth/login',
      form: { name: username, password: 'not password' }
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('Login failed');
      done();
    });
  });
});