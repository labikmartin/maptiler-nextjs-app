'use client';

import NextLink from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  List,
  ListItem,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { useDialogs } from '@toolpad/core';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { DeleteIconButton } from '@/common/components/DeleteIconButton/DeleteIconButton';
import { ListCard } from '@/common/components/ListCard/ListCard';
import {
  CreateEntityDialog,
  StatusEnum,
  statusSchema,
  statusVariants,
} from '@/features/entity';

const schema = z.object({
  name: z.string().nonempty(),
  status: statusSchema,
});

export default function Home() {
  const dialogs = useDialogs();

  // const { data: dataEntities } = useGetEntitiesQuery();
  // const { data: dataEntity } = useGetEntityQuery();
  // const [createEntity, { data: createEntityData }] = useCreateEntityMutation();
  // const [updateEntity, { data: updateEntityData }] = useUpdateEntityMutation();
  // const [deleteEntity, { data: deleteEntityData }] = useDeleteEntityMutation();

  // console.log('dataEntities: ', dataEntities);
  // console.log('dataEntity: ', dataEntity);
  // console.log('createEntityData: ', createEntityData);
  // console.log('updateEntityData: ', updateEntityData);
  // console.log('deleteEntityData: ', deleteEntityData);

  const { control, formState, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      status: StatusEnum.NEW,
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { errors } = formState;

  const onSubmit = (data: unknown) => {
    // createEntity({ variables: { name: 'test', status: 'NEW' } });
    // updateEntity({
    //   variables: { name: 'kjshadbhkjbdsh', status: 'DEPRECATED', id: '1' },
    // });
    // deleteEntity({ variables: { id: '1' } });
    console.log(data);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end" marginBottom={2}>
        <Button
          startIcon={<AddIcon />}
          sx={{ marginLeft: 'auto' }}
          variant="contained"
          onClick={async () => await dialogs.open(CreateEntityDialog)}
        >
          Create New Entity
        </Button>
      </Box>
      <List>
        {Array.from({ length: 5 }).map((_, index) => (
          <ListItem key={index} sx={{ paddingX: 0 }}>
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
        <Stack spacing={4}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.name}
                helperText={errors.name?.message}
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

        <input type="submit" />
      </form>
    </>
  );
}
