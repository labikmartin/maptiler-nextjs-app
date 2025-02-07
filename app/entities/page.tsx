'use client';

import NextLink from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, List, ListItem, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().nonempty(),
});

export default function Home() {
  const { control, formState, handleSubmit } = useForm({
    defaultValues: {
      firstName: 'test',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

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
    </>
  );
}
