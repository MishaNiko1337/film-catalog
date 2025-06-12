const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/movies.json');

class Movie {
  static getAll() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  static getById(id) {
    return Movie.getAll().find(movie => movie.id === id);
  }

  static saveAll(movies) {
    fs.writeFileSync(filePath, JSON.stringify(movies, null, 2));
  }

  static add(data) {
    const movies = Movie.getAll();
    const newMovie = {
      id: Date.now(),
      title: data.title,
      director: data.director,
      rating: parseInt(data.rating),
      status: data.status || 'w trakcie',
      review: data.review || '',
      reviews: []
    };
    Movie.saveAll([...movies, newMovie]);
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
          review: newData.review || ''
        };
      }
      return movie;
    });
    Movie.saveAll(updated);
  }

  static delete(id) {
    const filtered = Movie.getAll().filter(movie => movie.id !== id);
    Movie.saveAll(filtered);
  }

  static toggleStatus(id) {
    const movies = Movie.getAll().map(movie => {
      if (movie.id === id) {
        movie.status = movie.status === 'obejrzane' ? 'w trakcie' : 'obejrzane';
      }
      return movie;
    });
    Movie.saveAll(movies);
  }

  static addReview(movieId, userId, email, rating, text) {
    const movies = Movie.getAll();
    const updated = movies.map(movie => {
      if (movie.id === movieId) {
        if (!movie.reviews) movie.reviews = [];
        movie.reviews.push({ userId, email, rating, text });
      }
      return movie;
    });
    Movie.saveAll(updated);
  }
}

module.exports = Movie;
