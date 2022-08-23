import { Autocomplete, IconButton, InputBase, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div>
        <Image
          src="https://www.adidas.com.vn/glass/react/f269eb7/assets/img/icon-adidas-logo.svg"
          alt="adidas logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </div>

      <div>
        <div>
          <a>Sign in</a>
          <a>VN</a>
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

          <div className="flex justify-center items-center w-[48px] h-[48px]">
            <ShoppingBagOutlinedIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
