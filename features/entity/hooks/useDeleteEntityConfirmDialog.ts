'use client';

import { useDialogs } from '@toolpad/core';

import type { Entity } from '@/features/entity/types';

export function useDeleteEntityConfirmDialog() {
  const dialogs = useDialogs();

  async function openDialog(entity: Entity, onConfirm: () => void) {
    await dialogs.confirm(
      `Are you sure you want to delete Entity - ${entity.name}?`,
      {
        onClose: async (isConfirmed) => {
          if (isConfirmed) {
            onConfirm();
          }
        },
        title: 'Delete Entity',
      },
    );
  }

  return openDialog;
}
