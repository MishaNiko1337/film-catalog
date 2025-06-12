const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const movieController = require('../controllers/movieController');
const requireLogin = require('../middlewares/authMiddleware');

const Movie = require('../models/Movie');

router.get('/home', requireLogin, movieController.getAllMovies);

router.get('/add', requireLogin, (req, res) => {
  res.render('add', { title: 'Dodaj film' });
});

router.post('/add', requireLogin, (req, res) => {
  Movie.add(req.body);
  res.redirect('/home');
});

router.get('/edit/:id', requireLogin, (req, res) => {
  const movie = Movie.getById(parseInt(req.params.id));
  if (!movie) return res.redirect('/home');
  res.render('edit', { title: 'Edytuj film', movie });
});

router.post('/edit/:id', requireLogin, (req, res) => {
  Movie.update(parseInt(req.params.id), req.body);
  res.redirect('/home');
});

router.post('/toggle-status/:id', requireLogin, (req, res) => {
  Movie.toggleStatus(parseInt(req.params.id));
  res.redirect('/home');
});

router.post('/delete/:id', requireLogin, (req, res) => {
  Movie.delete(parseInt(req.params.id));
  res.redirect('/home');
});

router.get('/popular', requireLogin, (req, res) => {
  const filePath = path.join(__dirname, '../data/popular.json');
  const popular = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  res.render('popular', { title: 'Popularne filmy', popular });
});

router.post('/popular/add', requireLogin, (req, res) => {
  const { title, director, rating, status } = req.body;
  Movie.add({ title, director, rating, status });
  res.redirect('/home');
});

router.get('/review/:id', requireLogin, (req, res) => {
  const movie = Movie.getById(parseInt(req.params.id));
  if (!movie) return res.redirect('/home');
  res.render('review', { movie });
});

router.post('/review/:id', requireLogin, (req, res) => {
  const movieId = parseInt(req.params.id);
  const { rating, text } = req.body;
  const { id, email } = req.session.user;

  Movie.addReview(movieId, id, email, parseInt(rating), text);
  res.redirect('/home');
});

module.exports = router;
