import { useQuery } from '@apollo/client';

import { type Entity, ENTITY_QUERY } from '@/features/entity';

export function useGetEntityQuery() {
  const query = useQuery<Entity>(ENTITY_QUERY, {
    variables: { id: 1 },
  });

  return query;
}
