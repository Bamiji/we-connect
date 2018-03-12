const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
  const { name } = req.body;

  res.send(`User ${name} has been registered.`);
});

router.post('/login', (req, res) => {
  const user = { name: 'banji', password: 'banji' };
  const { name, password } = req.body;

  if (name === user.name && password === user.password) {
    res.send(`User ${name} has been logged in.`);
  } else {
    res.send('Login failed.');
  }
});

module.exports = router;
