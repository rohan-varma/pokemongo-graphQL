import schema from './schema';
import graphqlHTTP from 'express-graphql';
import express from 'express';

express()
  .use('/graphql', graphqlHTTP({ schema: schema, pretty: true, graphiql: true }))
  .listen(3000);

console.log('GraphQL server running on http://localhost:3000/graphql');
