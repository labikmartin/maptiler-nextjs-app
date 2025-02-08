import { gql } from '@apollo/client';

export const DELETE_ENTITY_MUTATION = gql`
  mutation DeleteEntityMutation($id: ID!) {
    deleteEntity(id: $id)
  }
`;
