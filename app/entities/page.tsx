'use client';

import NextLink from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Link, List, ListItem, TextField } from '@mui/material';
import { useDialogs } from '@toolpad/core';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { CreateEntityDialog } from '@/features/entity';

const schema = z.object({
  firstName: z.string().nonempty(),
});

export default function Home() {
  const dialogs = useDialogs();

  const { control, formState, handleSubmit } = useForm({
    defaultValues: {
      firstName: 'test',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { errors } = formState;

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <>
      <List>
        <ListItem>
          <Link component={NextLink} href="/entity/detail/1">
            Entity 1
          </Link>
        </ListItem>
        <ListItem>
          <Link component={NextLink} href="/entity/detail/2">
            Entity 2
          </Link>
        </ListItem>
      </List>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />

        <input type="submit" />
      </form>

      <Button onClick={async () => await dialogs.open(CreateEntityDialog)}>
        Create New Entity
      </Button>
    </>
  );
}
