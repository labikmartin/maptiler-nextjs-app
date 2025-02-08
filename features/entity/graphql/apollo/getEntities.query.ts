import { gql } from '@apollo/client';

export const ENTITIES_QUERY = gql`
  query EntityQuery {
    getEntities {
      id
      name
      status
    }
  }
`;
