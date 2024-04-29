const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require("cors");

const app = express();
const port = 3000;
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// Read the users data from users.json
const usersData = JSON.parse(fs.readFileSync('users.json'));
const dbData = JSON.parse(fs.readFileSync('db.json'));

// Secret key for JWT token (change this in a real application)
const secretKey = 'aecretKey1';

app.use(bodyParser.json());
app.use(cors(corsOptions));

// Login endpoint to validate username and password and generate a JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body.data;

  // Find the user with the provided username
  console.log(req.body)
  const user = usersData.users.find((user) => user.username === username);
  if (!user || user.password !== password) {
    return res.status(403).json({ message: 'Invalid username or password' });
  }

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

  res.json({ token, username });
});

// Posts endpoint with JWT authentication
app.get('/posts', verifyToken, (req, res) => {
  // Replace this with your posts data or reading from a db.json file.
  res.json(dbData.posts);
});

// Update post endpoint with JWT authentication
app.put('/posts/:id', verifyToken, (req, res) => {
  const postId = parseInt(req.params.id);
  const { author, post } = req.body;

  // Update the post in dbData
  const updatedPost = { id: postId, author, post };
  const index = dbData.posts.findIndex((p) => p.id === postId);
  if (index !== -1) {
    dbData.posts[index] = updatedPost;
    res.json(updatedPost);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Add user endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if the username already exists
  const existingUser = usersData.users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Add the new user to usersData
  const newUser = { username, password };
  usersData.users.push(newUser);
  fs.writeFileSync('users.json', JSON.stringify(usersData, null, 2));

  res.status(200).json({ message: 'User added successfully', user: newUser });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  console.log(req.headers)
  const token = req.headers['authorization'];
  const bearerToken = token.replace(/^Bearer\s/, '');
  if (!token) {
    return res.status(403).json({ message: 'Token is not provided' });
  }

  jwt.verify(bearerToken, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  }
  );
}

app.post('/posts', verifyToken, (req, res) => {
  const { author, post } = req.body;
  if(author === undefined || post === undefined || author.trim() === '' || post.trim() === '') {
  res.thr
    return res.status(500).send({ message: 'Author and post are required' });
  }
  // Create a new post object
  const newPost = {
    id: dbData.posts.length + 1, // Generate a new ID (assuming IDs are incremental)
    author,
    post
  };

  // Add the new post to dbData
  dbData.posts.push(newPost);
  fs.writeFileSync('db.json', JSON.stringify(dbData, null, 2));

  res.json({ message: 'Post added successfully', post: newPost });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

