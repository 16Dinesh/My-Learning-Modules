const gql = require("graphql-tag");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    products: [Product]
    posts: [Post]
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product
    createPost(title: String!, content: String!): Post
  }
`;

module.exports = { typeDefs };
