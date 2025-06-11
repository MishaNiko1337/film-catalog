const Movie = require('../models/Movie');

exports.getAllMovies = (req, res) => {
  const movies = Movie.getAllByUser(req.session.user.id);
  res.render('movies', {
    title: 'Moje Filmy',
    movies,
    user: req.session.user
  });
};


