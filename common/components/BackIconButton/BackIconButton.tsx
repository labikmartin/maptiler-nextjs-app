import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

interface BackIconButtonProps {
  onClick?: () => void;
}

export const BackIconButton = (props: BackIconButtonProps) => {
  return (
    <IconButton
      sx={{ color: 'grey.500' }}
      title="Return to previous page"
      {...props}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};
