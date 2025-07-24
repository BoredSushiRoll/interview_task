const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router(); 

router.post('/login', (req, res) => {
  console.log('Login route HIT!')
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router; 
