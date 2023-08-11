import dotenv from "dotenv";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

dotenv.config();

import typeDefs from "./Graphql/Schema/schema.js";
import { mainCards, products, categories } from "./data/index.js";
import {
  Product,
  Category,
  Query,
  Mutation,
} from "./Graphql/Resolvers/Index.js";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
});

// Middleware

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },

  context: () => {
    return {
      mainCards,
      products,
      categories,
    };
  },
});

console.log(`🚀 Server ready at ${url}`);
