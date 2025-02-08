import { useQuery } from '@apollo/client';

import { type Entity, ENTITY_QUERY } from '@/features/entity';

export function useGetEntityQuery(id?: string) {
  const { data, ...rest } = useQuery<{ entity: Entity }>(ENTITY_QUERY, {
    variables: { id },
  });

  return { data: data?.entity, ...rest };
}
