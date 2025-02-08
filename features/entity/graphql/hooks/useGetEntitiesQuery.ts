import { useQuery } from '@apollo/client';

import { ENTITIES_QUERY, type Entity } from '@/features/entity';

export function useGetEntitiesQuery() {
  const { data, ...rest } = useQuery<{ entities: Entity[] }>(ENTITIES_QUERY);

  return { data: data?.entities, ...rest };
}
