import { Badge, IconButton, InputBase } from "@mui/material";
import Image from "next/image";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useScrollDirection } from "../../hooks/useSCrollDirection";
import { Header } from "./Header";
import Footer from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
