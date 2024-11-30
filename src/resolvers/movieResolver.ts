/** @format */
import { getMovieById, getMovies } from "../services/movieService.js"

const movieResolver = {
  Query: {
    movies: getMovies,
    movie: getMovieById,
  },
}

export default movieResolver
