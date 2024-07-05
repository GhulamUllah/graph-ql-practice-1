const { gql } = require("apollo-server-express");

const resolvers = {
  Query: {
    hello: () => "welcome note",
    muniba: () => "Hello Muniba's World",
  },
};

module.exports = { resolvers };
