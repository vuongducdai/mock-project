import { Box, Stack } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

export default function MainLayout({ children }) {
  return (
    <Stack>
      <Header />
      <Box flexGrow={1} mt={15}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
