import { type PropsWithChildren, type ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { DialogProps } from '@toolpad/core';

interface FormDialogProps extends PropsWithChildren, DialogProps {
  formId: string;
  title: ReactNode;
  confirmButtonLabel?: string;
  isLoading?: boolean;
}

export function FormDialog({
  children,
  confirmButtonLabel = 'Submit',
  formId,
  isLoading = false,
  onClose,
  title,
  ...rest
}: FormDialogProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog {...rest} fullWidth onClose={handleClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button form={formId} loading={isLoading} type="submit">
          {confirmButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
