import { gql } from '@apollo/client';

export const EntitySchema = gql`
  type Query {
    entities: [Entity!]!
  }

  type Query {
    entity(id: ID!): Entity
  }

  type Mutation {
    createEntity(name: String!, status: Status!): Entity
  }

  type Mutation {
    updateEntity(id: ID!, name: String!, status: Status!): Entity
  }

  type Mutation {
    deleteEntity(id: ID!): ID
  }

  type Entity {
    id: ID!
    name: String!
    status: String!
  }

  enum Status {
    NONE
    NEW
    DEPRECATED
  }
`;
