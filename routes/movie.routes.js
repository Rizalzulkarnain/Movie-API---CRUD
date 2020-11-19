const express = require('express');
const router = express.Router();

const {
  getMovies,
  getSingleMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies.controllers');

const { isValidId } = require('../middleware/isValid');

router.get('/movies', getMovies);
router.get('/movie/:id', isValidId, getSingleMovie);
router.post('/movie', createMovie);
router.put('/movie/:id', isValidId, updateMovie);
router.delete('/movie/:id', isValidId, deleteMovie);

module.exports = router;
