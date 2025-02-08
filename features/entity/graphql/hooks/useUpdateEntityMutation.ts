import { useMutation } from '@apollo/client';

import {
  ENTITIES_QUERY,
  type Entity,
  UPDATE_ENTITY_MUTATION,
} from '@/features/entity';

import type { CreateEntityMutationVariables } from './useCreateEntityMutation';

interface UpdateEntityMutationVariables extends CreateEntityMutationVariables {
  id: string;
}

export function useUpdateEntityMutation() {
  const mutationTuple = useMutation<Entity, UpdateEntityMutationVariables>(
    UPDATE_ENTITY_MUTATION,
    {
      refetchQueries: [{ query: ENTITIES_QUERY }],
    },
  );

  return mutationTuple;
}
