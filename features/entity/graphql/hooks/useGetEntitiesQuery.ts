import { useQuery } from '@apollo/client';

import { ENTITIES_QUERY, type Entity } from '@/features/entity';

export function useGetEntitiesQuery() {
  const query = useQuery<Entity[]>(ENTITIES_QUERY);

  return query;
}
