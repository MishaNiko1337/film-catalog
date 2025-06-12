const User = require('../models/User');

exports.renderRegister = (req, res) => {
  res.render('register', { title: 'Rejestracja' });
};

exports.register = (req, res) => {
  const { email, password } = req.body;
  if (User.findByEmail(email)) {
    return res.send('Użytkownik już istnieje');
  }
  const user = User.create(email, password);
  req.session.user = user;
  req.session.save(err => {
    if (err) return res.redirect('/register');
    res.redirect('/');
  });
};

exports.renderLogin = (req, res) => {
  res.render('login', { title: 'Logowanie' });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = User.validate(email, password);
  if (!user) return res.send('Nieprawidłowe dane');
  req.session.user = user;
  req.session.save(err => {
    if (err) return res.redirect('/login');
    res.redirect('/');
  });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};