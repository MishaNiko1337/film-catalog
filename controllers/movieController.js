const Movie = require('../models/Movie');

exports.getAllMovies = (req, res) => {
  const movies = Movie.getAll();
  res.render('movies', {
    title: 'Katalog Filmów',
    movies,
    user: req.session.user
  });
};
