const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const fs = require('fs');

const app = express();
const PORT = 3000;

const sessionsPath = path.join(__dirname, 'sessions');
if (!fs.existsSync(sessionsPath)) {
  fs.mkdirSync(sessionsPath);
}


app.use(session({
  store: new FileStore({
    path: sessionsPath,
    ttl: 3600, 
    reapInterval: 3600,
    retries: 0, 
    logFn: function (msg) {
      if (!msg.includes('retry')) {
        console.log('[session-file-store]', msg);
      }
    }
  }),
  secret: 'tajny_klucz',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 
  }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/home');
  } else {
    res.redirect('/login');
  }
});

const movieRoutes = require('./routes/movieRoutes');
const authRoutes = require('./routes/authRoutes');
app.use('/', movieRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
