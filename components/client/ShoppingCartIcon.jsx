import ClickAwayListener from "@mui/base/ClickAwayListener";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
  Badge,
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useCart } from "../../api/cart";
import { getUser } from "../../redux/admin/userSlice";
import calculateQuantityCart from "../../utils/calculateQuantityCart";
import BlackButton from "../BlackButton";
import { ProductColumn } from "./ProductColumn";

const EmptyCart = () => {
  return (
    <Typography variant="h5" align="center">
      TÚI CỦA BẠN TRỐNG
    </Typography>
  );
};

const HasItemCart = ({ productList, toggleDrawer }) => {
  const router = useRouter();
  const handleClick = (e) => {
    router.push("/cart");
    toggleDrawer(false);
  };

  return (
    <Stack>
      <ProductColumn productList={productList} toggleDrawer={toggleDrawer} />
      <BlackButton title="Xem giỏ hàng" onClick={handleClick} />
    </Stack>
  );
};

const ShoppingCartFlyout = ({ productList }) => {
  return (
    <Stack
      zIndex={1200}
      position={"absolute"}
      right={0}
      justifyContent="center"
      bgcolor="white"
      width={400}
      px={"30px"}
      py={"20px"}
      className="drop-shadow-xl"
    >
      {productList && productList.length !== 0 ? (
        <HasItemCart productList={productList} />
      ) : (
        <EmptyCart />
      )}
    </Stack>
  );
};

export const ShoppingCartIcon = () => {
  const [openCart, setOpenCart] = useState(false);
  const user = useSelector(getUser);
  const { data } = useCart(user?._id);
  const productList = data?.products;

  const handleClick = () => {
    setOpenCart((state) => !state);
  };

  const handleClickAway = () => {
    setOpenCart(false);
  };

  return (
    <Stack
      width={48}
      height={48}
      align="center"
      justifyContent="center"
      alignItems="center"
      className="cursor-pointer"
    >
      <Box position="relative">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box>
            <Badge
              badgeContent={calculateQuantityCart(productList)}
              max={50}
              color="primary"
            >
              <ShoppingBagOutlinedIcon onClick={handleClick} />
            </Badge>
            {openCart && <ShoppingCartFlyout productList={productList} />}
          </Box>
        </ClickAwayListener>
      </Box>
    </Stack>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  backgroundColor: "#eceff1",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const ShoppingCartDrawer = ({ open, setOpen, productList, toggleDrawer }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerWidth = "100%";

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      {productList && productList.length !== 0 ? (
        <HasItemCart productList={productList} toggleDrawer={toggleDrawer} />
      ) : (
        <EmptyCart />
      )}{" "}
    </Drawer>
  );
};

export const ShoppingCartIconMobile = () => {
  const [openCart, setOpenCart] = useState(false);
  const user = useSelector(getUser);
  const { data } = useCart(user?._id);
  const productList = data?.products;

  const handleClick = () => {
    setOpenCart((state) => !state);
  };

  const toggleDrawer = (open) => {
    setOpenCart(open);
    console.log(open);
  };

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
        <Badge
          badgeContent={calculateQuantityCart(productList)}
          max={50}
          color="primary"
        >
          <ShoppingBagOutlinedIcon color="primary" onClick={handleClick} />
        </Badge>
        <ShoppingCartDrawer
          open={openCart}
          setOpen={setOpenCart}
          productList={productList}
          toggleDrawer={toggleDrawer}
        />
      </Box>
    </Stack>
  );
};
