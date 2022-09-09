import { Box, Stack } from '@mui/material';
import React from 'react';
import Header from '@/components/common/header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <Stack>
      <Header />
      <Box flexGrow={1} sx={{ marginTop: { xs: 11, lg: 13.5 } }}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
