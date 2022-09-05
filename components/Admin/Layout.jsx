import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Newitem from './Newitem'
import { useSelector } from "react-redux";


const Layout = ({ children, type }) => {
      const { isOpen, isEdit } = useSelector(state => state.toolbarSlice);

      return (
            <div className="flex min-h-screen bg-fb transition-all duration-500">
                  <Sidebar />

                  <div className="w-full h-full transition-all duration-1000">
                        <Navbar />
                        <div className="p-8">{children}</div>
                  </div>

                  {isOpen && <Newitem isOpen={isOpen} type={type} isEdit={isEdit} />}
            </div>
      );
};

export default Layout;
