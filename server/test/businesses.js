'use strict';

var _chai = require('chai');

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Business Registration Route', function () {
  var name = 'test business';
  var location = 'test site';
  var category = 'test category';

  it('returns business as registered', function (done) {
    _request2.default.post({
      url: 'http://localhost:3000/businesses/',
      form: { name: name, location: location, category: category }
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include(name);
      (0, _chai.expect)(body).to.include(location);
      (0, _chai.expect)(body).to.include(category);
      (0, _chai.expect)(body).to.include('created');
      done();
    });
  });
});

describe('Business Info Update Route', function () {
  var name = 'test business';
  var location = 'test site';
  var category = 'test category';

  it('returns empty update unchanged', function (done) {
    _request2.default.put({
      url: 'http://localhost:3000/businesses/1',
      form: {}
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('andela');
      (0, _chai.expect)(body).to.include('lagos');
      (0, _chai.expect)(body).to.include('computer science');
      (0, _chai.expect)(body).to.include('updated');
      done();
    });
  });

  it('returns partial update edited', function (done) {
    _request2.default.put({
      url: 'http://localhost:3000/businesses/2',
      form: { name: name }
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include(name);
      (0, _chai.expect)(body).to.include('abuja');
      (0, _chai.expect)(body).to.include('engineering');
      (0, _chai.expect)(body).to.include('updated');
      done();
    });
  });

  it('returns full update edited', function (done) {
    _request2.default.put({
      url: 'http://localhost:3000/businesses/1',
      form: { name: name, location: location, category: category }
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include(name);
      (0, _chai.expect)(body).to.include(location);
      (0, _chai.expect)(body).to.include(category);
      (0, _chai.expect)(body).to.include('updated');
      done();
    });
  });
});

describe('Business Deletion Route', function () {
  it('returns business as deleted', function (done) {
    _request2.default.del({
      url: 'http://localhost:3000/businesses/1'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('andela');
      (0, _chai.expect)(body).to.include('deleted');
      done();
    });
  });

  it('returns correct business as deleted', function (done) {
    _request2.default.del({
      url: 'http://localhost:3000/businesses/2'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('not andela');
      (0, _chai.expect)(body).to.include('deleted');
      done();
    });
  });
});

describe('Business Selection Route', function () {
  it('returns business', function (done) {
    _request2.default.get({
      url: 'http://localhost:3000/businesses/1'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('andela');
      (0, _chai.expect)(body).to.include('found');
      done();
    });
  });

  it('returns correct business', function (done) {
    _request2.default.get({
      url: 'http://localhost:3000/businesses/2'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('not andela');
      (0, _chai.expect)(body).to.include('found');
      done();
    });
  });
});

describe('Business Listing Route', function () {
  it('returns all businesses', function (done) {
    _request2.default.get({
      url: 'http://localhost:3000/businesses/'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('andela');
      (0, _chai.expect)(body).to.include('andela2');
      (0, _chai.expect)(body).to.include('not andela');
      (0, _chai.expect)(body).to.include('not andela 2');
      done();
    });
  });

  it('returns all businesses of a location', function (done) {
    _request2.default.get({
      url: 'http://localhost:3000/businesses?location=1'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('andela');
      (0, _chai.expect)(body).to.include('not andela');
      (0, _chai.expect)(body).to.include('lagos');
      done();
    });
  });

  it('returns all businesses of a category', function (done) {
    _request2.default.get({
      url: 'http://localhost:3000/businesses?category=2'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('andela2');
      (0, _chai.expect)(body).to.include('not andela 2');
      (0, _chai.expect)(body).to.include('marketting');
      done();
    });
  });
});

describe('Business Review Addition Route', function () {
  var title = 'review title';

  it('returns review as added', function (done) {
    _request2.default.post({
      url: 'http://localhost:3000/businesses/1/reviews',
      form: { title: title }
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('review title');
      (0, _chai.expect)(body).to.include('andela');
      (0, _chai.expect)(body).to.include('Added review');
      done();
    });
  });

  it('returns review as added to correct business', function (done) {
    _request2.default.post({
      url: 'http://localhost:3000/businesses/2/reviews',
      form: { title: title }
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('review title');
      (0, _chai.expect)(body).to.include('not andela');
      (0, _chai.expect)(body).to.include('Added review');
      done();
    });
  });
});

describe('Business Review Selection Route', function () {
  it('returns business review', function (done) {
    _request2.default.get({
      url: 'http://localhost:3000/businesses/1/reviews'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('All reviews for');
      (0, _chai.expect)(body).to.include('andela');
      (0, _chai.expect)(body).to.include('review-a');
      (0, _chai.expect)(body).to.include('review-b');
      done();
    });
  });

  it('returns business review for correct business', function (done) {
    _request2.default.get({
      url: 'http://localhost:3000/businesses/2/reviews'
    }, function (err, httpResponse, body) {
      (0, _chai.expect)(body).to.include('All reviews for');
      (0, _chai.expect)(body).to.include('not andela');
      (0, _chai.expect)(body).to.include('review-c');
      (0, _chai.expect)(body).to.include('review-d');
      done();
    });
  });
});