'use client';

import { type PropsWithChildren } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ flexGrow: 1, padding: 3, paddingTop: 20 }}>
        <AppBar
          color="transparent"
          position="fixed"
          sx={{ backdropFilter: 'blur(10px)' }}
          variant="outlined"
        >
          <Toolbar>
            <Container>
              <NextLink href="/">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Image alt="logo" height={45} src="/logo.png" width={40} />
                  <Typography variant="h6">Entity Catalog</Typography>
                </Box>
              </NextLink>
            </Container>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </Box>
      <Box
        component="footer"
        sx={{ py: 2, textAlign: 'center', bgcolor: 'grey.50' }}
      >
        <Typography variant="body2">© 2025 MapTiler</Typography>
      </Box>
    </Box>
  );
}
