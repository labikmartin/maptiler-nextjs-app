import { useMutation } from '@apollo/client';

import { DELETE_ENTITY_MUTATION, ENTITIES_QUERY } from '@/features/entity';

export function useDeleteEntityMutation() {
  const mutationTuple = useMutation<number, { id: string }>(
    DELETE_ENTITY_MUTATION,
    {
      refetchQueries: [{ query: ENTITIES_QUERY }],
    },
  );

  return mutationTuple;
}
