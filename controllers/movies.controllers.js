const queries = require('../DB/queries');
const isValid = require('../middleware/isValid');

exports.getMovies = async (req, res) => {
  try {
    const movies = await queries.getAll();
    res.status(200).json({
      success: true,
      data: movies,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getSingleMovie = async (req, res) => {
  try {
    const movie = await queries.getOne(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not Found...!',
      });
    }

    res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

function validMovie(movie) {
  const hasTitle = typeof movie.title === 'string' && movie.title.trim() !== '';
  const hasDescription =
    typeof movie.description === 'string' && movie.description.trim() !== '';
  const hasRating = !isNaN(movie.rating);
  const hasUrl = typeof movie.url === 'string' && movie.url.trim() !== '';
  return hasTitle && hasUrl && hasDescription && hasRating;
}

exports.createMovie = async (req, res) => {
  try {
    if (validMovie(req.body)) {
      await queries.create(req.body).then((movies) => {
        res.status(201).json({
          success: true,
          data: movies[0],
        });
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Create Movie is not found!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    if (validMovie(req.body)) {
      await queries.update(req.params.id, req.body).then((movies) => {
        res.status(200).json({
          success: true,
          data: movies,
        });
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Create Movie is not found!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await queries.delete(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
