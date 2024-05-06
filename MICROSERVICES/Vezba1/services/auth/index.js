const express = require('express');
const auth = require('./handlers/authHandler');
const db = require('../../pkg/db/index');
const cors = require('cors');

const app = express();

db.init();
app.use(express.json());
app.use(cors());

//ruti
app.post('/api/v1/auth/create-account', auth.signup);
app.post('/api/v1/auth/login', auth.login);

app.listen(process.env.PORTAUTH, (err) => {
  if (err) {
    console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTAUTH}`);
});
