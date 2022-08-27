import { Badge } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState } from "react";
import { ProductColumn } from "./ProductColumn";
import BlackButton from "../BlackButton";
import { useRouter } from "next/router";

const EmptyCart = () => {
  return <span className="text-xl">TÚI CỦA BẠN TRỐNG</span>;
};

const HasItemCart = ({ productList }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/cart/");
  };

  return (
    <div>
      <ProductColumn productList={productList} />
      <BlackButton title="Xem giỏ hàng" onClick={handleClick} />
    </div>
  );
};

const ShoppingCartFlyout = ({ productList }) => {
  return (
    <div className="z-[1200] absolute flex justify-center bg-white w-[400px] right-0 px-[30px] py-[20px] drop-shadow-xl">
      {productList.length !== 0 ? (
        <HasItemCart productList={productList} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export const ShoppingCartIcon = ({ quantity }) => {
  const [openCart, setOpenCart] = useState(false);
  console.log("rendr shopping cart icon");

  const productList = [
    // {
    //   name: "Incredible Bronze Soap",
    //   img: "http://loremflickr.com/640/480/people",
    //   price: 51383,
    //   color: "6",
    //   size: 84,
    //   createdAt: 1661509438891,
    //   material: "2",
    //   quantity: 49,
    //   id: "6",
    // },
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
    </div>
  );
};
