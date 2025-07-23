require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/authRoutes');
const itemsRoute = require('./routes/items');
const app = express();


app.use(cors({ 
  origin: 'http://localhost:5173', 
  credentials : true,
  exposedHeaders: ['Authorization']
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/items', itemsRoute);
app.use(express.json());
app.use('/', authRoute);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
