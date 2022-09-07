import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../common/header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <Stack>
      <Header />
      <Box flexGrow={1} mt={13.5}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
