import { Badge } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScrollDirection } from "../../hooks/useSCrollDirection";
import SearchBar from "../client/SearchBar";
import { ShoppingCartIcon } from "../client/ShoppingCartIcon";

const HeaderTitle = () => {
  return (
    <div className="bg-black h-[30px] flex justify-around items-center text-white text-xs tracking-widest w-[100%]">
      <div>MIỄN PHÍ GIAO HÀNG TRÊN 1.300.000 VNĐ</div>
      <div>TRẢ HÀNG DỄ DÀNG</div>
      <div> NAY ĐÃ CÓ THỂ THANH TOÁN VỚI THẺ TÍN DỤNG!</div>
    </div>
  );
};

const LoginSection = () => {
  return (
    <div className="flex justify-end pt-[5px] text-[14px]">
      <a className="px-[5px] cursor-pointer">đăng nhập</a>
    </div>
  );
};

const LogoIcon = () => {
  return (
    <div className="flex">
      <Link href="/">
        <Image
          src="https://www.adidas.com.vn/glass/react/f269eb7/assets/img/icon-adidas-logo.svg"
          alt="adidas logo"
          width={60}
          height={60}
          className="cursor-pointer relative top-[-17px]"
        />
      </Link>
    </div>
  );
};

export const Header = () => {
  const scrollDirection = useScrollDirection();
  const { count } = useSelector((state) => state.cartSlice);

  return (
    <header
      className={`fixed ${
        scrollDirection === "down" ? "-top-28 inset-x-0" : "top-0 inset-x-0"
      } transition-all duration-500 z-[1200] bg-white border-b`}
    >
      <HeaderTitle />
      <div className="flex justify-between px-[20px]">
        <LogoIcon />
        <div>
          <LoginSection />
          <div className="flex justify-center">
            <SearchBar />
            <ShoppingCartIcon quantity={count} />
          </div>
        </div>
      </div>
    </header>
  );
};
