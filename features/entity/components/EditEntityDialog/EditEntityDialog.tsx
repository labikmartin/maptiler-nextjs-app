'use client';

import { useEffect, useId } from 'react';
import type { DialogProps } from '@toolpad/core';

import { FormDialog } from '@/common/components/FormDialog/FormDialog';
import {
  CreateEntityForm,
  type CreateEntityFormValues,
  type Entity,
  useUpdateEntityMutation,
} from '@/features/entity';

interface EditEntityDialogProps extends Omit<DialogProps, 'payload'> {
  payload?: {
    defaultValues: CreateEntityFormValues;
    entityId: Entity['id'];
  };
}

export function EditEntityDialog({ payload, ...props }: EditEntityDialogProps) {
  const { onClose } = props;
  const { defaultValues, entityId } = payload || {};

  const formId = useId();

  const [updateEntity, { data, loading }] = useUpdateEntityMutation();

  const onSubmit = (formData: CreateEntityFormValues) => {
    if (!entityId) {
      return;
    }

    const data = { ...formData, id: entityId };
    updateEntity({ variables: data });
  };

  useEffect(() => {
    if (data && !loading) {
      onClose();
    }
  }, [data, loading]);

  return (
    <FormDialog {...props} formId={formId} title="Edit Entity">
      <CreateEntityForm
        defaultValues={defaultValues}
        formId={formId}
        onSubmit={onSubmit}
      />
    </FormDialog>
  );
}
