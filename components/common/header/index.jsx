import React from "react";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

const Header = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};

export default Header;
