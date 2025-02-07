'use client';

import NextLink from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, List, ListItem, TextField } from '@mui/material';
import { useDialogs } from '@toolpad/core';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { DeleteIconButton } from '@/common/components/DeleteIconButton/DeleteIconButton';
import { ListCard } from '@/common/components/ListCard/ListCard';
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
        {Array.from({ length: 5 }).map((_, index) => (
          <ListItem key={index} sx={{ paddingLeft: 0 }}>
            <ListCard
              actions={
                <DeleteIconButton onClick={() => console.log('delete')} />
              }
              component={NextLink}
              componentProps={{ href: `/entity/detail/${index}` }}
              title="Entity 1"
            >
              Status A
            </ListCard>
          </ListItem>
        ))}
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
