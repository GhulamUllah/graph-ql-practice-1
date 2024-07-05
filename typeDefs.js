const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    title: String
    description: String
  }

  type Query {
    hello: String
    muniba: String
  }
`;
module.exports = { typeDefs };
