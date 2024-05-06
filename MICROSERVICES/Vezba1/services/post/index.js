const express = require('express');
const db = require('../../pkg/db/index');
const post = require('./handlers/postHandler');
// npm install express-jwt
const jwt = require('express-jwt');
const cors = require('cors');

const app = express();

db.init();

app.use(express.json());
app.use(cors());
//modul za protektiranje ruti
app.use(
  jwt.expressjwt({
    algorithms: ['HS256'],
    secret: process.env.JWT_SECRET,
  })
);

//routes
app.get('/api/v1/posts', post.getAll);
app.get('/api/v1/posts/:id', post.getOne);
app.post('/api/v1/posts', post.create);
app.patch('/api/v1/posts/:id', post.update);
app.delete('/api/v1/posts/:id', post.delete);

app.post('/api/v1/posts/me', post.createByUser);
app.get('/api/v1/posts/me', post.getByUser);

app.listen(process.env.PORTPOST, (err) => {
  if (err) {
    console.log('Could not start service');
  }
  console.log(`service started successfully on portt ${process.env.PORTPOST}`);
});
