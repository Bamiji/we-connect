const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  const name = req.body.name;

  res.send(`User ${name} has been registered.`);
});

router.post('/login', (req, res) => {
  user = {name: 'banji', password: 'banji'};
  const name = req.body.name;
  const password = req.body.password;

  if (name == user.name && password == user.password) {
    res.send(`User ${name} has been logged in.`);
  }
  else{
    res.send('Login failed.')
  }

});

module.exports = router;
