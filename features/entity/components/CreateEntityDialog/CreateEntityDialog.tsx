'use client';

import { useEffect, useId } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { MenuItem, Stack, TextField } from '@mui/material';
import type { DialogProps } from '@toolpad/core';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormDialog } from '@/common/components/FormDialog/FormDialog';
import {
  type CreateEntityForm,
  useCreateEntityMutation,
} from '@/features/entity';
import {
  StatusEnum,
  statusSchema,
  statusVariants,
} from '@/features/entity/constants';

const schema = z.object({
  name: z.string().nonempty(),
  status: statusSchema,
});

const defaultFormValues: CreateEntityForm = {
  name: '',
  status: StatusEnum.NEW,
};

interface CreateEntityDialogProps extends DialogProps {
  defaultValues?: CreateEntityForm;
}

export function CreateEntityDialog({
  defaultValues = defaultFormValues,
  ...props
}: CreateEntityDialogProps) {
  const { onClose } = props;

  const formId = useId();

  const { control, formState, handleSubmit } = useForm<CreateEntityForm>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { errors } = formState;

  const [createEntity, { data, loading }] = useCreateEntityMutation();

  const onSubmit = (data: CreateEntityForm) => {
    createEntity({ variables: data });
  };

  useEffect(() => {
    if (data && !loading) {
      onClose();
    }
  }, [data, loading]);

  return (
    <FormDialog {...props} formId={formId} title="Create New Entity">
      <form id={formId} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.name}
                helperText={errors.name?.message}
                label="Name"
                variant="standard"
              />
            )}
          />
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <TextField
                {...field}
                select
                error={!!errors.status}
                helperText={errors.status?.message}
                label="Status"
                variant="standard"
              >
                {statusVariants.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Stack>
      </form>
    </FormDialog>
  );
}
