import { gql } from '@apollo/client';

export const ENTITY_QUERY = gql`
  query EntityQuery($id: ID!) {
    getEntity(id: $id) {
      id
      name
      status
    }
  }
`;
