/** @format */

import mongoose, { Document, Schema } from "mongoose"

export interface Movie extends Document {
  title: string
  description: string
  imdb_score: number
  genre: string
  released_year: string
  featured_image: string
  video_url: string
}

const movieSchema: Schema<Movie> = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imdb_score: { type: Number, required: true },
  genre: { type: String, required: true },
  released_year: { type: String, required: true },
  featured_image: { type: String, required: true },
  video_url: { type: String, required: true },
})

export const Movie = mongoose.model<Movie>("Movie", movieSchema)
