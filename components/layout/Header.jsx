import { Badge, IconButton, InputBase } from "@mui/material";
import Image from "next/image";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useScrollDirection } from "../../hooks/useSCrollDirection";

export const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed ${
        scrollDirection === "down" ? "-top-28 inset-x-0" : "top-0 inset-x-0"
      } transition-all duration-500 z-50 bg-white`}
    >
      <div className="bg-black h-[30px] flex justify-around items-center text-white text-xs tracking-widest w-[100%]">
        <div>MIỄN PHÍ GIAO HÀNG TRÊN 1.300.000 VNĐ</div>
        <div>TRẢ HÀNG DỄ DÀNG</div>
        <div> NAY ĐÃ CÓ THỂ THANH TOÁN VỚI THẺ TÍN DỤNG!</div>
      </div>
      <div className="flex justify-between px-[20px]">
        <div className="flex">
          <Image
            src="https://www.adidas.com.vn/glass/react/f269eb7/assets/img/icon-adidas-logo.svg"
            alt="adidas logo"
            width={60}
            height={60}
            className="cursor-pointer relative top-[-17px]"
          />
        </div>
        <div>
          <div className="flex justify-end pt-[5px] text-[14px]">
            <a className="px-[5px]">đăng nhập</a>
          </div>
          <div className="flex justify-center">
            <div className="py-[8px] pl-[36px] w-[15vw]">
              <div className="border border-transparent hover:border-black duration-1000 bg-[#eceff1] h-[32px] flex">
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton className="text-black text-center">
                  <SearchIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex justify-center items-center w-[48px] h-[48px] cursor-pointer">
              <Badge badgeContent={4} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
