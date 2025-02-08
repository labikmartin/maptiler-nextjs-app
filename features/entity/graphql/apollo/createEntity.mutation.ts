import { gql } from '@apollo/client';

export const CREATE_ENTITY_MUTATION = gql`
  mutation CreateEntityMutation($name: String!, $status: Status!) {
    createEntity(name: $name, status: $status) {
      id
      name
      status
    }
  }
`;
