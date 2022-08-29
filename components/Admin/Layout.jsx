import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Newitem from './Newitem'


const Layout = ({ children }) => {
      const [open, setOpen] = useState(false);

      return (
            <div className="flex min-h-screen bg-fb transition-all duration-500">
                  <Sidebar setOpen={setOpen} />

                  <div className="w-full h-full transition-all duration-1000">
                        <Navbar />
                        <div className="p-8">{children}</div>
                  </div>

                  {open && <Newitem setOpen={setOpen} />}
            </div>
      );
};

export default Layout;
