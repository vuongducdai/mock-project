import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { SearchBarMobile } from "../../client/SearchBar";
import {
  ShoppingCartIcon,
  ShoppingCartIconMobile,
} from "../../client/ShoppingCartIcon";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
}));

const LogoIcon = () => {
  return (
    <div className="flex">
      <Link href="/">
        <a>
          <Image
            src="https://www.adidas.com.vn/glass/react/f269eb7/assets/img/icon-adidas-logo.svg"
            alt="adidas logo"
            width={50}
            height={50}
            className="cursor-pointer relative top-[-17px]"
          />
        </a>
      </Link>
    </div>
  );
};

const Search = (props) => {
  return <SearchIcon color="primary" {...props} />;
};

export const HeaderMobile = () => {
  const scrollDirection = useScrollDirection();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      variant="header"
      className={`fixed ${
        scrollDirection === "down" ? "-top-28 inset-x-0" : "top-0 inset-x-0"
      } transition-all duration-500 z-[1200] bg-white border-b`}
      display={{ xs: "block", lg: "none" }}
    >
      <StyledAppBar position="static">
        <Toolbar>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <LogoIcon />
            <Stack direction="row">
              <Link href="/login">
                <PersonOutlineOutlinedIcon color="primary" />
              </Link>
              <Search onClick={handleDrawerOpen} />
              <ShoppingCartIconMobile />
              <SearchBarMobile open={open} setOpen={setOpen} />
            </Stack>
          </Stack>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
