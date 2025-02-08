import { gql } from '@apollo/client';

export const UPDATE_ENTITY_MUTATION = gql`
  mutation UpdateEntityMutation($id: ID!, $name: String!, $status: Status!) {
    updateEntity(id: $id, name: $name, status: $status) {
      id
      name
      status
    }
  }
`;
