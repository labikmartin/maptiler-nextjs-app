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
import {
  CreateEntityDialog,
  type Entity,
  useDeleteEntityConfirmDialog,
  useDeleteEntityMutation,
  useGetEntitiesQuery,
} from '@/features/entity';

export default function EntitiesPage() {
  const dialogs = useDialogs();
  const openDeleteEntityConfirmDialog = useDeleteEntityConfirmDialog();

  const { data, loading: isLoadingEntities } = useGetEntitiesQuery();
  const [deleteEntity, { loading: isDeleteEntityLoading }] =
    useDeleteEntityMutation();

  function handleDeleteEntityConfirm(entityId: string) {
    deleteEntity({ variables: { id: entityId } });
  }

  async function handleCreateEntityDialogOpen() {
    await dialogs.open(CreateEntityDialog);
  }

  async function handleDeleteEntityDialogOpen(entity: Entity) {
    await openDeleteEntityConfirmDialog(entity, () =>
      handleDeleteEntityConfirm(entity.id),
    );
  }

  const hasEntities = data && data.length > 0;

  return (
    <>
      <Box display="flex" justifyContent="flex-end" marginBottom={2}>
        <Button
          startIcon={<AddIcon />}
          sx={{ marginLeft: 'auto' }}
          variant="contained"
          onClick={handleCreateEntityDialogOpen}
        >
          Create New Entity
        </Button>
      </Box>
      {isLoadingEntities && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      <List>
        {data?.map((entity) => (
          <ListItem key={entity.id} sx={{ paddingX: 0 }}>
            <ListCard
              actions={
                <DeleteIconButton
                  loading={isDeleteEntityLoading}
                  onClick={() => handleDeleteEntityDialogOpen(entity)}
                />
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
      {!hasEntities && !isLoadingEntities && (
        <Stack justifyContent="center" sx={{ height: 'calc(100vh - 19rem)' }}>
          <Alert icon={false} severity="info">
            Start by creating new Entity 🚀
          </Alert>
        </Stack>
      )}
    </>
  );
}
