const path = require('path');
const fs = require('fs');
const Movie = require('../models/Movie');

exports.getAllMovies = (req, res) => {
  const movies = Movie.getAll();
  res.render('movies', {
    title: 'Katalog Filmów',
    movies,
    user: req.session.user
  });
};

exports.renderAddForm = (req, res) => {
  res.render('add', { title: 'Dodaj film' });
};

exports.addMovie = (req, res) => {
  Movie.add(req.body);
  res.redirect('/home');
};

exports.renderEditForm = (req, res) => {
  const movie = Movie.getById(parseInt(req.params.id));
  if (!movie) return res.redirect('/home');
  res.render('edit', { title: 'Edytuj film', movie });
};

exports.updateMovie = (req, res) => {
  Movie.update(parseInt(req.params.id), req.body);
  res.redirect('/home');
};

exports.toggleStatus = (req, res) => {
  Movie.toggleStatus(parseInt(req.params.id));
  res.redirect('/home');
};

exports.deleteMovie = (req, res) => {
  Movie.delete(parseInt(req.params.id));
  res.redirect('/home');
};

exports.getPopular = (req, res) => {
  const filePath = path.join(__dirname, '../data/popular.json');
  const popular = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  res.render('popular', { title: 'Popularne filmy', popular });
};

exports.addFromPopular = (req, res) => {
  const { title, director, rating, status } = req.body;
  Movie.add({ title, director, rating, status });
  res.redirect('/home');
};

exports.renderReviewForm = (req, res) => {
  const movie = Movie.getById(parseInt(req.params.id));
  if (!movie) return res.redirect('/home');
  res.render('review', { movie });
};

exports.submitReview = (req, res) => {
  const movieId = parseInt(req.params.id);
  const { rating, text } = req.body;
  const { id, email } = req.session.user;
  Movie.addReview(movieId, id, email, parseInt(rating), text);
  res.redirect('/home');
};
