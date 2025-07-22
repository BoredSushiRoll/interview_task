const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username === 'admin' && password === 'admin') {
    return res.status(200).json({ token: 'fake-jwt-token' })
  }

  return res.status(401).json({ error: 'Invalid credentials' })
})

module.exports = router
