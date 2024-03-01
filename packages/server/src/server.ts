import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import mongoose from "mongoose"
import express from 'express';
import http from 'http';
import cors from 'cors';
import { json } from 'body-parser';
import { typeDefs, resolvers } from './graphql';
import { dbConfig } from './env-config';

interface MyContext {
  token?: String;
}

const MONGO_URI = dbConfig.mongoUri;

export const startApolloServer = async () => {
  const app = express();
  // Database connection
  mongoose
    .connect(MONGO_URI, {
    })
    .then(() => {
      console.log(`Db Connected`);
    })
    .catch(err => {
      console.log(err.message);
    });
  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
  });
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: 4001 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4001/graphql`);
}