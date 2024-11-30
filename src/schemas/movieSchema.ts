/** @format */

const movieSchema = `#graphql
  type Movie {
    id: ID!
    title: String!
    description: String!
    imdb_score: Float
    genre: String
    released_year: Int
    featured_image: String
    video_url: String
  }

  type Query {
    movies(search: String, page: Int): [Movie!]!
    movie(id: ID!): Movie
  }
`

export default movieSchema
