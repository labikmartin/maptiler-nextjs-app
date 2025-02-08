'use client';

import NextLink from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  Stack,
} from '@mui/material';
import { useDialogs } from '@toolpad/core';

import { DeleteIconButton } from '@/common/components/DeleteIconButton/DeleteIconButton';
import { ListCard } from '@/common/components/ListCard/ListCard';
import { CreateEntityDialog, useGetEntitiesQuery } from '@/features/entity';

export default function EntitiesPage() {
  const dialogs = useDialogs();

  const { data, loading } = useGetEntitiesQuery();
  // const { data: dataEntity } = useGetEntityQuery();
  // const [createEntity, { data: createEntityData }] = useCreateEntityMutation();
  // const [updateEntity, { data: updateEntityData }] = useUpdateEntityMutation();
  // const [deleteEntity, { data: deleteEntityData }] = useDeleteEntityMutation();

  // console.log('dataEntities: ', dataEntities);
  // console.log('dataEntity: ', dataEntity);
  // console.log('createEntityData: ', createEntityData);
  // console.log('updateEntityData: ', updateEntityData);
  // console.log('deleteEntityData: ', deleteEntityData);

  console.log(data);

  const hasEntities = data && data.length > 0;

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
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      <List>
        {data?.map((entity) => (
          <ListItem key={entity.id} sx={{ paddingX: 0 }}>
            <ListCard
              actions={
                <DeleteIconButton onClick={() => console.log('delete')} />
              }
              component={NextLink}
              componentProps={{ href: `/entity/detail/${entity.id}` }}
              title={entity.name}
            >
              {entity.status}
            </ListCard>
          </ListItem>
        ))}
      </List>
      {!hasEntities && !loading && (
        <Stack justifyContent="center" sx={{ height: 'calc(100vh - 19rem)' }}>
          <Alert icon={false} severity="info">
            Start by creating new Entity 🚀
          </Alert>
        </Stack>
      )}
    </>
  );
}
