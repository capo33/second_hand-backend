import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

dotenv.config();

import {
  Product,
  Category,
  Query,
  Mutation,
} from "./Graphql/Resolvers/Index.js";
import typeDefs from "./Graphql/Schema/schema.js";
import { mainCards, products, categories } from "./data/index.js";

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
