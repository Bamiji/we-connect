/**
 * Returns a specified business
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function viewBusiness(req, res) {
  const business = req.params.businessId === '1' ?
    ['andela', 'lagos', 'computer science'] :
    ['not andela', 'abuja', 'engineering'];

  res.send(`Business ${business[0]} found`);
}
/**
 * Updates a specified business
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function updateBusiness(req, res) {
  const business = req.params.businessId === '1' ?
    ['andela', 'lagos', 'computer science'] :
    ['not andela', 'abuja', 'engineering'];

  const name = req.body.name === undefined ? business[0] : req.body.name;
  const location = req.body.location === undefined ? business[1] : req.body.location;
  const category = req.body.category === undefined ? business[2] : req.body.category;

  res.send(`Business ${name} of category ${category} at ${location} updated.`);
}
/**
 * Deletes a specified business
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function deleteBusiness(req, res) {
  const business = req.params.businessId === '1' ?
    ['andela', 'lagos', 'computer science'] :
    ['not andela', 'abuja', 'engineering'];

  res.send(`Business ${business[0]} deleted`);
}

/**
 * Returns all businesses of a certain type
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function viewAllBusinesses(req, res) {
  const businesses = [['andela', 'lagos', 'tech'],
    ['andela2', 'abuja', 'marketting'],
    ['not andela', 'lagos', 'tech'],
    ['not andela 2', 'abuja', 'marketting']];

  if (req.query.location !== undefined) {
    const location = req.query.location === '1' ? 'lagos' : 'abuja';
    const validBusinesses = [];

    businesses.forEach((business) => {
      if (business[1] === location) {
        validBusinesses.push(business);
      }
    });

    res.send(`The following businesses are at location ${location}:
              ${validBusinesses}.`);
  } else if (req.query.category !== undefined) {
    const category = req.query.category === '1' ? 'tech' : 'marketting';
    const validBusinesses = [];

    businesses.forEach((business) => {
      if (business[2] === category) {
        validBusinesses.push(business);
      }
    });

    res.send(`The following businesses are in category ${category}:
              ${validBusinesses}.`);
  } else {
    res.send(`All Businesses: ${businesses}`);
  }
}
/**
 * Creates a business as specified
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function createBusiness(req, res) {
  const { name, location, category } = req.body;

  res.send(`Business ${name} of category ${category} at ${location} created.`);
}

/**
 * Returns a specified business review
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function viewReview(req, res) {
  const business = req.params.businessId === '1' ?
    ['andela', 'review-a', 'review-b'] :
    ['not andela', 'review-c', 'review-d'];
  const businessName = business[0];

  res.send(`All reviews for business ${businessName}: ${business.slice(1)}.`);
}
/**
 * Adds a review to a business as specified
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function addReview(req, res) {
  const business = req.params.businessId === '1' ?
    ['andela', 'lagos', 'computer science'] :
    ['not andela', 'abuja', 'engineering'];

  const businessName = business[0];
  const reviewTitle = req.body.title;

  res.send(`Added review ${reviewTitle} to business ${businessName}.`);
}

export {
  createBusiness, updateBusiness, deleteBusiness, viewBusiness,
  viewAllBusinesses, addReview, viewReview
};
