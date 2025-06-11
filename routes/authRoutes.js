const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/register', (req, res) => {
  res.render('register', { title: 'Rejestracja' });
});

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (User.findByEmail(email)) {
    return res.send('Użytkownik już istnieje');
  }
  const user = User.create(email, password);
  req.session.user = user;
  res.redirect('/');
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Logowanie' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = User.validate(email, password);
  if (!user) return res.send('Nieprawidłowe dane');
  req.session.user = user;
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
