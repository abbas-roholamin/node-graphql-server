/** @format */
import { Movie } from "../models/Movie.js"

export const getMovies = async (
  _: any,
  { search, page = 1 }: { search?: string; page?: number },
) => {
  const query = search ? { title: new RegExp(search, "i") } : {}
  return Movie.find(query)
    .skip((page - 1) * 4)
    .limit(4)
}

export const getMovieById = async (_: any, { id }: { id: string }) => {
  return Movie.findById(id)
}
