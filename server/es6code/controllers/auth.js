/**
 * Signs up a user
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function signUp(req, res) {
  const { name } = req.body;

  res.send(`User ${name} has been registered.`);
}

/**
 * Logs in a user
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The HTTP response.
 */
function logIn(req, res) {
  const user = { name: 'banji', password: 'banji' };
  const { name, password } = req.body;

  if (name === user.name && password === user.password) {
    res.send(`User ${name} has been logged in.`);
  } else {
    res.send('Login failed.');
  }
}

export { signUp, logIn };
