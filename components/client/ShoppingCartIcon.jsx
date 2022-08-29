import { Badge, Box, Stack, Typography } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState } from "react";
import { ProductColumn } from "./ProductColumn";
import BlackButton from "../BlackButton";
import { useRouter } from "next/router";

const EmptyCart = () => {
  return (
    <Typography variant="h5" align="center">
      TÚI CỦA BẠN TRỐNG
    </Typography>
  );
};

const HasItemCart = ({ productList }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/cart/");
  };

  return (
    <Stack>
      <ProductColumn productList={productList} />
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
      {/* <div className="z-[1200] absolute flex justify-center bg-white w-[400px] right-0 px-[30px] py-[20px] drop-shadow-xl"> */}
      {productList.length !== 0 ? (
        <HasItemCart productList={productList} />
      ) : (
        <EmptyCart />
      )}
    </Stack>
  );
};

export const ShoppingCartIcon = ({ quantity }) => {
  const [openCart, setOpenCart] = useState(false);
  console.log("rendr shopping cart icon");

  const productList = [
    {
      name: "Incredible Bronze Soap",
      img: "http://loremflickr.com/640/480/people",
      price: 51383,
      color: "6",
      size: 84,
      createdAt: 1661509438891,
      material: "2",
      quantity: 49,
      id: "6",
    },
  ];

  const handleClick = () => {
    setOpenCart((state) => !state);
  };

  const handleClickAway = () => {
    console.log("Click away");
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
            <Badge badgeContent={quantity} max={10} color="primary">
              <ShoppingBagOutlinedIcon onClick={handleClick} />
            </Badge>
            {openCart && <ShoppingCartFlyout productList={productList} />}
          </Box>
        </ClickAwayListener>
      </Box>
    </Stack>
  );
};
