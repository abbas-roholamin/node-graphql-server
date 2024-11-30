/** @format */

import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { connectDB } from "./config/database.js"
import typeDefs from "./schemas/index.js"
import resolvers from "./resolvers/index.js"

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

await connectDB()

console.log(`🚀  Server ready at: ${url}`)
