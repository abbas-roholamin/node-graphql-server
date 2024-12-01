/** @format */
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";

import { connectDB } from "./config/database.js";
import typeDefs from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import context from "./context/context.js";


const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/",
  cors<cors.CorsRequest>({
    origin: [
      "*",
      "http://localhost:3000",
      "https://node-graphql-server.onrender.com/",
      "https://studio.apollographql.com/",
      "https://movieland-1zdk.vercel.app/"
    ],
  }),
  express.json(),
  expressMiddleware(server, {
    context,
  })
);



await connectDB()

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000`);
