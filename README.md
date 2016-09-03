# pokemongo-graphQL

[Check out the blog post!](https://rohan-varma.github.io/rohan-blog/Exploring-GraphQL/)
This project contains a basic implementation of a GraphQL Schema for PokemonGo. It supports querying for pokemon and moves. If you don't want to clone the project, it's hosted using now.sh [here](https://pokemongo-graphql-senopusxhk.now.sh/graphql). 
## Starting up the project
 - Clone the repository into a local folder.
 - If you don't have Node installed, install it [here](https://nodejs.org/en/download/).
 - Run `npm install` to install the dependencies for this project.
 - Run `npm start` to start the server. You should be able to access a GraphQL IDE at [http://localhost:3000/graphql](http://localhost:3000/graphql), as the command line will tell you.
 - Run a few queries and explore the schema!
 
## Example queries:
- Query for pokemon a pokemon with a ceratin id (1-5), and get its name, thumbnail URL, favorite move, and best friend:

```javascript
query pokemonQuery($id: String) {
  pokemon(id: $id) {
    name
    thumbnail
    favoriteMove {
      name
    }
    bestFriend {
      name
    }
  }
}
```

