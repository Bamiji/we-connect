/**
 * Returns the home page
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
export default function homePage(req, res, /* next */) {
  res.send('Welcome to We Connect');
}
