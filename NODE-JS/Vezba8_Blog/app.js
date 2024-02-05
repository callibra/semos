//Da se kreira blog na ruta /blog
//Za submitiranje na post korisnice da pishat sopstveno ime naslov i tekst
//da ima ruta so /sport
// da ima ruta so /movies

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const blogController = require('./controllers/blogController');
const sportController = require('./controllers/sportController');
const moviesController = require('./controllers/moviesController');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(blogController);
app.use(sportController);
app.use(moviesController);

const port = 10000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
