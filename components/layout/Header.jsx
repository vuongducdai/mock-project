import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScrollDirection } from "../../hooks/useSCrollDirection";
import SearchBar from "../client/SearchBar";
import { ShoppingCartIcon } from "../client/ShoppingCartIcon";

import { logout } from "../../redux/admin/userSlice";
const HeaderTitle = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      bgcolor="black"
      height={30}
      color="white"
    >
      <Typography variant="body2">
        MIỄN PHÍ GIAO HÀNG TRÊN 1.300.000 VNĐ
      </Typography>
      <Typography variant="body2">TRẢ HÀNG DỄ DÀNG</Typography>
      <Typography variant="body2">
        NAY ĐÃ CÓ THỂ THANH TOÁN VỚI THẺ TÍN DỤNG!
      </Typography>
    </Stack>
  );
};

const LoginSection = ({ user }) => {
  return (
    <>
      <Link underline="none" href="/login" variant="body2">
        <a>đăng nhập</a>
      </Link>
    </>
  );
};
const LogoutSection = ({ user, click }) => {
  return <button onClick={click}>đăng xuất</button>;
};

const LogoIcon = () => {
  return (
    <div className="flex">
      <Link href="/">
        <a>
          <Image
            src="https://www.adidas.com.vn/glass/react/f269eb7/assets/img/icon-adidas-logo.svg"
            alt="adidas logo"
            width={60}
            height={60}
            className="cursor-pointer relative top-[-17px]"
          />
        </a>
      </Link>
    </div>
  );
};

export const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  const router = useRouter();
  const scrollDirection = useScrollDirection();
  const dispatch = useDispatch();
  const logout1 = () => {
    dispatch(logout());
  };
  const pathname = router.pathname;

  return (
    <Box
      variant="header"
      className={`fixed ${
        scrollDirection === "down" ? "-top-28 inset-x-0" : "top-0 inset-x-0"
      } transition-all duration-500 z-[1200] bg-white border-b`}
    >
      <HeaderTitle />
      <Stack
        justifyContent="space-between"
        px={"20px"}
        pt={"5px"}
        direction="row"
      >
        <LogoIcon />
        <Stack>
          <Box textAlign={"right"}>
            {!user ? (
              <LoginSection user={user} />
            ) : (
              <LogoutSection user={user} click={logout1} />
            )}
          </Box>
          <Stack justifyContent="center" direction="row">
            <SearchBar />
            <ShoppingCartIcon />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
