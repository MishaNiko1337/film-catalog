const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const requireLogin = require('../middlewares/authMiddleware');

router.get('/home', requireLogin, movieController.getAllMovies);
router.get('/add', requireLogin, movieController.renderAddForm);
router.post('/add', requireLogin, movieController.addMovie);
router.get('/edit/:id', requireLogin, movieController.renderEditForm);
router.post('/edit/:id', requireLogin, movieController.updateMovie);
router.post('/toggle-status/:id', requireLogin, movieController.toggleStatus);
router.post('/delete/:id', requireLogin, movieController.deleteMovie);
router.get('/popular', requireLogin, movieController.getPopular);
router.post('/popular/add', requireLogin, movieController.addFromPopular);
router.get('/review/:id', requireLogin, movieController.renderReviewForm);
router.post('/review/:id', requireLogin, movieController.submitReview);

module.exports = router;