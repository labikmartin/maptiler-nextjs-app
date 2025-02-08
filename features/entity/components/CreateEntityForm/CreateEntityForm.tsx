'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { MenuItem, Stack, TextField } from '@mui/material';
import type { FormEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import type { CreateEntityFormValues } from '@/features/entity';
import {
  StatusEnum,
  statusSchema,
  statusVariants,
} from '@/features/entity/constants';

const schema = z.object({
  name: z.string().nonempty(),
  status: statusSchema,
});

const defaultFormValues: CreateEntityFormValues = {
  name: '',
  status: StatusEnum.NEW,
};

interface CreateEntityFormProps {
  formId: string;
  onSubmit: (data: CreateEntityFormValues) => void;
  defaultValues?: CreateEntityFormValues;
}

export function CreateEntityForm({
  defaultValues = defaultFormValues,
  formId,
  onSubmit,
}: CreateEntityFormProps) {
  const { control, formState, handleSubmit } = useForm<CreateEntityFormValues>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { errors, isDirty } = formState;

  function submitHandler(event: FormEvent) {
    if (!isDirty) {
      return event.preventDefault();
    }

    return handleSubmit(onSubmit)(event);
  }

  return (
    <form id={formId} onSubmit={submitHandler}>
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
  );
}
