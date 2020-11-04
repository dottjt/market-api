import { ApolloServer, gql } from 'apollo-server-koa';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: () => 'Hello world!',
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });
