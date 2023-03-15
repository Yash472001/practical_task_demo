const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Collection {
    _id: ID!
    name: String!
    address: String!
  }

  type Query {
    getCollection(_id: ID!): Collection
    allCollection: [Collection]
  }

  input CollectionInput {
    name: String!
    address: String!
  }

  type Mutation {
    createCollection(input: CollectionInput): Collection
    updateCollection(_id: ID!, input: CollectionInput): Collection
    deleteCollection(_id: ID!): Collection
  }
`;