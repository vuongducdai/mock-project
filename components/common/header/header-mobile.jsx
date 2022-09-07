import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { SearchBarMobile } from "../../client/SearchBar";
import { ShoppingCartIconMobile } from "../../client/ShoppingCartIcon";

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

const LoginLogo = () => {
  return (
    <Stack
      width={48}
      height={48}
      align="center"
      justifyContent="center"
      alignItems="center"
      className="cursor-pointer"
    >
      <Box>
        <Link href="/login">
          <PersonOutlineOutlinedIcon color="primary" />
        </Link>
      </Box>
    </Stack>
  );
};

export const HeaderMobile = () => {
  const scrollDirection = useScrollDirection();

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
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <LogoIcon />
            <Stack direction="row">
              <LoginLogo />
              <SearchBarMobile />
              <ShoppingCartIconMobile />
            </Stack>
          </Stack>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
