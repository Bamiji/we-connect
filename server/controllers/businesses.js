'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function viewBusiness(req, res) {
  var business = req.params.businessId === '1' ? ['andela', 'lagos', 'computer science'] : ['not andela', 'abuja', 'engineering'];

  res.send('Business ' + business[0] + ' found');
}
function updateBusiness(req, res) {
  var business = req.params.businessId === '1' ? ['andela', 'lagos', 'computer science'] : ['not andela', 'abuja', 'engineering'];

  var name = req.body.name === undefined ? business[0] : req.body.name;
  var location = req.body.location === undefined ? business[1] : req.body.location;
  var category = req.body.category === undefined ? business[2] : req.body.category;

  res.send('Business ' + name + ' of category ' + category + ' at ' + location + ' updated.');
}
function deleteBusiness(req, res) {
  var business = req.params.businessId === '1' ? ['andela', 'lagos', 'computer science'] : ['not andela', 'abuja', 'engineering'];

  res.send('Business ' + business[0] + ' deleted');
}

function viewAllBusinesses(req, res) {
  var businesses = [['andela', 'lagos', 'tech'], ['andela2', 'abuja', 'marketting'], ['not andela', 'lagos', 'tech'], ['not andela 2', 'abuja', 'marketting']];

  if (req.query.location !== undefined) {
    var location = req.query.location === '1' ? 'lagos' : 'abuja';
    var validBusinesses = [];

    businesses.forEach(function (business) {
      if (business[1] === location) {
        validBusinesses.push(business);
      }
    });

    res.send('The following businesses are at location ' + location + ':\n              ' + validBusinesses + '.');
  } else if (req.query.category !== undefined) {
    var category = req.query.category === '1' ? 'tech' : 'marketting';
    var _validBusinesses = [];

    businesses.forEach(function (business) {
      if (business[2] === category) {
        _validBusinesses.push(business);
      }
    });

    res.send('The following businesses are in category ' + category + ':\n              ' + _validBusinesses + '.');
  } else {
    res.send('All Businesses: ' + businesses);
  }
}
function createBusiness(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      location = _req$body.location,
      category = _req$body.category;


  res.send('Business ' + name + ' of category ' + category + ' at ' + location + ' created.');
}

function viewReview(req, res) {
  var business = req.params.businessId === '1' ? ['andela', 'review-a', 'review-b'] : ['not andela', 'review-c', 'review-d'];
  var businessName = business[0];

  res.send('All reviews for business ' + businessName + ': ' + business.slice(1) + '.');
}
function addReview(req, res) {
  var business = req.params.businessId === '1' ? ['andela', 'lagos', 'computer science'] : ['not andela', 'abuja', 'engineering'];

  var businessName = business[0];
  var reviewTitle = req.body.title;

  res.send('Added review ' + reviewTitle + ' to business ' + businessName + '.');
}

exports.createBusiness = createBusiness;
exports.updateBusiness = updateBusiness;
exports.deleteBusiness = deleteBusiness;
exports.viewBusiness = viewBusiness;
exports.viewAllBusinesses = viewAllBusinesses;
exports.addReview = addReview;
exports.viewReview = viewReview;