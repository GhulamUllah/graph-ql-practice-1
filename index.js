const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const express = require("express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

mongoose
  .connect("mongodb://127.0.0.1/gql")
  .then((res) => console.log("Database Connected " + res.connection.host));

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app: app });
  app.listen(process.env.PORT || 4000, () =>
    console.log("Server is ready on " + (process.env.PORT || 4000))
  );
};
startServer();
