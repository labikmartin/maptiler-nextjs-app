import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

interface EditIconButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export function EditIconButton({
  loading = false,
  ...rest
}: EditIconButtonProps) {
  return (
    <IconButton
      {...rest}
      loading={loading}
      sx={{ color: 'black' }}
      title="Edit"
    >
      <EditIcon />
    </IconButton>
  );
}
