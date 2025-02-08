'use client';

import { useEffect } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { Box, Chip, Divider, Skeleton, Stack } from '@mui/material';
import { useDialogs } from '@toolpad/core';

import {
  BackIconButton,
  DeleteIconButton,
  EditIconButton,
} from '@/common/components';
import {
  EditEntityDialog,
  type Entity,
  useDeleteEntityConfirmDialog,
  useDeleteEntityMutation,
  useGetEntityQuery,
} from '@/features/entity';

export default function EntityDetailPage() {
  const params = useParams();
  const entityId = params.entityId as string;
  const router = useRouter();
  const dialogs = useDialogs();
  const openDeleteEntityConfirmDialog = useDeleteEntityConfirmDialog();

  const { data, loading: isLoading } = useGetEntityQuery(entityId);
  const { name, status } = data || {};

  const [deleteEntity, { loading: isDeleteEntityLoading }] =
    useDeleteEntityMutation();

  async function handleEditEntityDialogOpen() {
    if (!data) {
      return;
    }

    await dialogs.open(EditEntityDialog, { defaultValues: data, entityId });
  }

  async function handleDeleteEntityConfirm(entityId: string) {
    await deleteEntity({ variables: { id: entityId } });
    router.replace('/entities');
  }

  async function handleDeleteEntityDialogOpen(entity?: Entity) {
    if (!entity) {
      return;
    }

    await openDeleteEntityConfirmDialog(entity, () =>
      handleDeleteEntityConfirm(entity.id),
    );
  }

  useEffect(() => {
    if (!data && !isLoading) {
      notFound();
    }
  }, [data, isLoading]);

  if (isLoading) {
    return (
      <Stack spacing={5}>
        <Skeleton variant="rounded" width="50%" />
        <Skeleton variant="rounded" />
        <Skeleton height="30vh" variant="rounded" />
      </Stack>
    );
  }

  return (
    <Stack justifyContent="flex-start" spacing={5}>
      <Stack spacing={3}>
        <Box alignItems="center" display="flex" justifyContent="space-between">
          <Box alignItems="baseline" display="flex" gap={2}>
            <BackIconButton onClick={() => router.back()} />
            <h1>{name}</h1>
          </Box>
          <Box display="flex">
            <DeleteIconButton
              loading={isDeleteEntityLoading}
              onClick={() => handleDeleteEntityDialogOpen(data)}
            />
            <EditIconButton onClick={handleEditEntityDialogOpen} />
          </Box>
        </Box>
        <Divider />
      </Stack>
      <Stack direction="row">
        <Chip label={status} variant="outlined" />
      </Stack>
    </Stack>
  );
}
