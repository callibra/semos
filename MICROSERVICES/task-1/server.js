require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const db = require('./pkg/db/index'); 
const courseRoutes = require('./routes/courseRoutes');
const academyRoutes = require('./routes/academyRoutes');

const app = express();

db.init();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/courses', courseRoutes);
app.use('/academies', academyRoutes);

app.listen(process.env.PORTAUTH, (err) => {
    if (err) {
      console.log('Could not start service');
    }
    console.log(`service started successfully on port ${process.env.PORTAUTH}`);
});
