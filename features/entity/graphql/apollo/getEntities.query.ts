import { gql } from '@apollo/client';

export const ENTITIES_QUERY = gql`
  query EntityQuery {
    entities {
      id
      name
      status
    }
  }
`;
