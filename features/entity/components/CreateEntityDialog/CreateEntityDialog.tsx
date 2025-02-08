'use client';

import { useEffect, useId } from 'react';
import type { DialogProps } from '@toolpad/core';

import { FormDialog } from '@/common/components/FormDialog/FormDialog';
import {
  CreateEntityForm,
  type CreateEntityFormValues,
  useCreateEntityMutation,
} from '@/features/entity';

export function CreateEntityDialog({ ...props }: DialogProps) {
  const { onClose } = props;

  const formId = useId();

  const [createEntity, { data, loading }] = useCreateEntityMutation();

  const onSubmit = (data: CreateEntityFormValues) => {
    createEntity({ variables: data });
  };

  useEffect(() => {
    if (data && !loading) {
      onClose();
    }
  }, [data, loading]);

  return (
    <FormDialog {...props} formId={formId} title="Create New Entity">
      <CreateEntityForm formId={formId} onSubmit={onSubmit} />
    </FormDialog>
  );
}
