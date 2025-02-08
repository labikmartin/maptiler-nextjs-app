import { useQuery } from '@apollo/client';

import { type Entity, ENTITY_QUERY } from '@/features/entity';

export function useGetEntityQuery() {
  const { data, ...rest } = useQuery<{ entity: Entity }>(ENTITY_QUERY, {
    variables: { id: 1 },
  });

  return { data: data?.entity, ...rest };
}
