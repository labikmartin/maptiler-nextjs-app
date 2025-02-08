import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';

interface DeleteIconButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export function DeleteIconButton({
  loading = false,
  ...rest
}: DeleteIconButtonProps) {
  return (
    <IconButton
      {...rest}
      loading={loading}
      sx={{ color: 'error.light' }}
      title="Delete"
    >
      <DeleteForeverIcon />
    </IconButton>
  );
}
