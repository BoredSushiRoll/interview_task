const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware'); 

// GET /api/items - protected route
router.get('/', verifyToken, (req, res) => {
  const items = [
    { id: 1, name: 'Duct Tape', price: 10 },
    { id: 2, name: 'Cigarettes', price: 20 },
    { id: 3, name: 'USB Dongle', price: 50 }
  ];

  res.json({ token });
  res.json({ items});
});

module.exports = router;
