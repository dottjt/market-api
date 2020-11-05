import path from 'path';

import { config } from 'dotenv-flow';
config({ path: path.resolve(__dirname, '..', 'environment'), silent: true });

import { app } from './app';
import { server } from './graphql/apolloServer';

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
