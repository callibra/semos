const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const port = 10000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

const tasks = [];

const sortTasksByDateTime = () => {
  tasks.sort((a, b) => b.dateTime - a.dateTime);
};

app.get('/', (req, res) => {
  sortTasksByDateTime();
  res.render('index', { tasks });
});

app.post('/', (req, res) => {
  const task = {
    content: req.body.task,
    dateTime: new Date(),
  };
  tasks.push(task);
  sortTasksByDateTime();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});