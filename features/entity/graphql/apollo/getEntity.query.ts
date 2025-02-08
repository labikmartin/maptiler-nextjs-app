import { gql } from '@apollo/client';

export const ENTITY_QUERY = gql`
  query EntityQuery($id: ID!) {
    entity(id: $id) {
      id
      name
      status
    }
  }
`;
