import { type PropsWithChildren, type ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { DialogProps } from '@toolpad/core';

interface FormDialogProps
  extends PropsWithChildren,
    Omit<DialogProps, 'payload'> {
  title: ReactNode;
  payload: { onConfirm: () => void };
  confirmButtonLabel?: string;
}

export function FormDialog({
  children,
  confirmButtonLabel = 'Submit',
  onClose,
  payload,
  title,
  ...rest
}: FormDialogProps) {
  const { onConfirm } = payload;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog {...rest} fullWidth onClose={handleClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onConfirm}>{confirmButtonLabel}</Button>
      </DialogActions>
    </Dialog>
  );
}
