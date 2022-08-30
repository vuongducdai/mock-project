import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
const Sidebar = ({ setOpen }) => {

      return (
            <div className="flex">
                  <div className="w-[240px] h-full bg-white flex flex-col shadow-md py-6 gap-6">
                        <div className="flex-center">
                              <h1 className="text-2xl text-blue-pastel font-bold">Admin Panel</h1>
                        </div>

                        <div className="flex flex-col gap-8">
                              <Link href="/admin">
                                    <div className="flex items-center gap-4 pl-12 cursor-pointer">
                                          <div>
                                                <DashboardIcon />
                                          </div>
                                          <span>Dashboard</span>
                                    </div>
                              </Link>

                              <Link href="/admin/product">
                                    <div className="flex items-center gap-4 pl-12 cursor-pointer">
                                          <div>
                                                <LocalOfferIcon />
                                          </div>
                                          <span>Products</span>
                                    </div>
                              </Link>

                              <Link href="/admin/user">
                                    <div className="flex items-center gap-4 pl-12 cursor-pointer">
                                          <div>
                                                <PersonIcon />
                                          </div>
                                          <span>Users</span>
                                    </div>
                              </Link>

                              <Link href="/admin/order">
                                    <div className="flex items-center gap-4 pl-12 cursor-pointer">
                                          <div>
                                                <ShoppingCartIcon />
                                          </div>
                                          <span>Orders</span>
                                    </div>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default Sidebar;
