import { Box, Button, ButtonBase, Stack, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import SearchBar from "../../../components/client/SearchBar";
import { ShoppingCartIcon } from "../../../components/client/ShoppingCartIcon";

import { logout } from "../../../redux/admin/userSlice";

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

const LoginSection = () => {
  return (
    <>
      <Link underline="none" href="/login" variant="body2">
        <a>đăng nhập</a>
      </Link>
    </>
  );
};

const LogoutDialog = ({ open, handleClose, handleLogout }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Đăng xuất"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Bạn có muốn đăng xuất
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Không</Button>
        <Button onClick={handleLogout} autoFocus>
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const LogoutSection = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
  };

  return (
    <Stack direction="row">
      <Box paddingX="15px">
        <Typography>hoan nghênh bạn trở lại {user.name}</Typography>
      </Box>
      <ButtonBase onClick={handleClickOpen}>đăng xuất</ButtonBase>
      <LogoutDialog
        open={open}
        handleClose={handleClose}
        handleLogout={handleLogout}
      />
    </Stack>
  );
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

export const HeaderDesktop = () => {
  const { user } = useSelector((state) => state.userSlice);
  const router = useRouter();
  const scrollDirection = useScrollDirection();

  return (
    <Box
      variant="header"
      className={`fixed ${
        scrollDirection === "down" ? "-top-28 inset-x-0" : "top-0 inset-x-0"
      } transition-all duration-500 z-[1200] bg-white border-b`}
      display={{ xs: "none", lg: "block" }}
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
              <LogoutSection user={user} />
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
