const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

//Mount routes
app.use('/api', authRoutes)

app.get('/', (req, res) => {
  res.send('API is running')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
