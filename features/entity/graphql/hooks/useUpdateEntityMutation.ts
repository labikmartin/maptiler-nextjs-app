import { useMutation } from '@apollo/client';

import {
  type Entity,
  ENTITY_QUERY,
  UPDATE_ENTITY_MUTATION,
} from '@/features/entity';

import type { CreateEntityMutationVariables } from './useCreateEntityMutation';

interface UpdateEntityMutationVariables extends CreateEntityMutationVariables {
  id: string;
}

export function useUpdateEntityMutation() {
  const mutationTuple = useMutation<
    { updateEntity: Entity },
    UpdateEntityMutationVariables
  >(UPDATE_ENTITY_MUTATION, {
    refetchQueries: (result) => {
      const id = result?.data?.updateEntity?.id;

      return [{ query: ENTITY_QUERY, variables: { id } }];
    },
  });

  return mutationTuple;
}
