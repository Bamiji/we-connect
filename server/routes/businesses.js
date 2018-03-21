'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _businesses = require('../controllers/businesses.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _businesses.viewAllBusinesses);
router.post('/', _businesses.createBusiness);

router.get('/:businessId', _businesses.viewBusiness);
router.put('/:businessId', _businesses.updateBusiness);
router.delete('/:businessId', _businesses.deleteBusiness);

router.get('/:businessId/reviews', _businesses.viewReview);
router.post('/:businessId/reviews', _businesses.addReview);

exports.default = router;