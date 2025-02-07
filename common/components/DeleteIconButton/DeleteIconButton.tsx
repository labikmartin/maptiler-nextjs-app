import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';

interface DeleteIconButtonProps {
  onClick: () => void;
}

export function DeleteIconButton({ ...props }: DeleteIconButtonProps) {
  return (
    <IconButton sx={{ color: 'black' }} title="Delete" {...props}>
      <DeleteForeverIcon />
    </IconButton>
  );
}
