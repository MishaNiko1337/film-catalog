const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/movies.json');

class Movie {
  static getAll() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }
  static getAllByUser(userId) {
  return Movie.getAll().filter(movie => movie.userId === userId);
}

static add(data, userId) {
  const movies = Movie.getAll();
  const newMovie = {
    id: Date.now(),
    title: data.title,
    director: data.director,
    rating: parseInt(data.rating),
    status: data.status || 'w trakcie',
    review: data.review || '',
    userId: userId
  };
  movies.push(newMovie);
  fs.writeFileSync(filePath, JSON.stringify(movies, null, 2));
}

static toggleStatus(id) {
  const movies = Movie.getAll();
  const updated = movies.map(movie => {
    if (movie.id === id) {
      movie.status = movie.status === 'obejrzane' ? 'w trakcie' : 'obejrzane';
    }
    return movie;
  });
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
}
static getById(id) {
  const movies = Movie.getAll();
  return movies.find(movie => movie.id === id);
}

static update(id, newData) {
  const movies = Movie.getAll();
  const updated = movies.map(movie => {
    if (movie.id === id) {
      return {
        ...movie,
        title: newData.title,
        director: newData.director,
        rating: parseInt(newData.rating),
        status: newData.status,
        review: newData.review
      };
    }
    return movie;
  });
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
}
static delete(id) {
  const movies = Movie.getAll();
  const filtered = movies.filter(movie => movie.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));
}


}

module.exports = Movie;
