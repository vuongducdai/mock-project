import { SearchBarMobile } from "@/components/client/SearchBar";
import { ShoppingCartIconMobile } from "@/components/client/ShoppingCartIcon";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactTextTransition, { presets } from "react-text-transition";

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

const HeaderTitle = () => {
  const texts = [
    "MIỄN PHÍ GIAO HÀNG TRÊN 1.300.000 VNĐ",
    "TRẢ HÀNG DỄ DÀNG",
    "NAY ĐÃ CÓ THỂ THANH TOÁN VỚI THẺ TÍN DỤNG!",
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      bgcolor="black"
      height={30}
      color="white"
    >
      <ReactTextTransition springConfig={presets.gentle}>
        {texts[index % texts.length]}
      </ReactTextTransition>
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
      <HeaderTitle />

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
