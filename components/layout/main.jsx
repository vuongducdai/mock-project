import { Badge, IconButton, InputBase } from "@mui/material";
import Image from "next/image";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useScrollDirection } from "../../hooks/useSCrollDirection";
import { Header } from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="aboslute">s</div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
