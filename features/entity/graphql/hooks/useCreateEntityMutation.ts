import { useMutation } from '@apollo/client';

import {
  CREATE_ENTITY_MUTATION,
  ENTITIES_QUERY,
  type Entity,
  type Status,
} from '@/features/entity';

export interface CreateEntityMutationVariables {
  name: string;
  status: Status;
}

export function useCreateEntityMutation() {
  const mutationTuple = useMutation<Entity, CreateEntityMutationVariables>(
    CREATE_ENTITY_MUTATION,
    {
      refetchQueries: [{ query: ENTITIES_QUERY }],
    },
  );

  return mutationTuple;
}
