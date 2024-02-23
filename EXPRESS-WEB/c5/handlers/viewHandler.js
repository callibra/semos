const Movie = require('../pkg/movies/movieSchema');

exports.getLoginForm = async (req, res) => {
  try {
    res.status(200).render('login');
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.movieView = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).render('viewFilms', {
      status: 'success',
      naslov: 'HBO',
      movies,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
