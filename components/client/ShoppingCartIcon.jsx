import { Badge, Box, Popper } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState } from "react";
import { ProductColumn } from "./ProductColumn";

// const ShoppingCartPopper = ({ open, id, anchorEl }) => {
//   return (

//   );
// };

const ShoppingCartFlyout = ({ productList }) => {
  return (
    <div className="z-[1200] absolute flex bg-white w-[650px] right-0 px-[30px] py-[20px] drop-shadow-xl">
      <div className="basis-0 grow">Hello</div>
      <div className="basis-0 grow">
        <ProductColumn productList={productList} />
      </div>
    </div>
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
    <div className="flex justify-center items-center w-[48px] h-[48px] cursor-pointer relative">
      {/* <Link href="/cart"> */}
      <div className="relative">
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <Badge badgeContent={quantity} max={10} color="primary">
              <ShoppingBagOutlinedIcon onClick={handleClick} />
            </Badge>
            {openCart && <ShoppingCartFlyout productList={productList} />}
          </div>
        </ClickAwayListener>
      </div>

      {/* </Link> */}
    </div>
  );
};
