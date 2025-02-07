import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { ElementType, PropsWithChildren, ReactNode } from 'react';

type ListCardProps<T extends ElementType> = {
  title: string;
  component?: T;
  componentProps?: React.ComponentPropsWithoutRef<T>;
  actions?: ReactNode;
} & PropsWithChildren;

export function ListCard<T extends ElementType = 'div'>({
  actions,
  children,
  component,
  componentProps,
  title,
}: ListCardProps<T>) {
  return (
    <Card
      sx={{
        width: '100%',
        padding: 0,
        transition: 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: 3,
        },
      }}
    >
      <Box
        alignItems="center"
        display="flex"
        gap={2}
        justifyContent="space-between"
        padding={2}
        paddingBottom={2}
      >
        <CardContent
          {...componentProps}
          component={component as ElementType}
          sx={{ width: '100%', padding: 0 }}
        >
          <Typography gutterBottom component="div" variant="h5">
            {title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} variant="body2">
            {children}
          </Typography>
        </CardContent>
        {actions}
      </Box>
    </Card>
  );
}
