import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInterfaceType,
} from 'graphql';

import data from './data/pokemon.json';
import moves from './data/moves.json';
import friends from './data/friends.json';

const moveType = new GraphQLObjectType({
  name: 'move',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
  }),
});

const pokemonType = new GraphQLObjectType({
  name: 'pokemon',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    thumbnail: {type: GraphQLString},
    favoriteMove: {
      type: moveType,
      resolve: (parent, _) => moves[parent.id],
    },
    bestFriend: {
      type: pokemonType,
      resolve: (parent, _) => friends[parent.id],
    }
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    pokemon: {
      type: pokemonType,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (_,args) => data[args.id],
    },
    move: {
      type: moveType,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (_,args) => moves[args.id],
    },
  }
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
