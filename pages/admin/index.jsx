import React from "react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Admin/Sidebar";
import DataTable from "../../components/Admin/DataTable";
const Admin = () => {
      return (
            <div className="flex h-screen w-full bg-fb">
                  <Sidebar />
                  <div className="flex flex-col w-full">
                        <Navbar />
                        <div className="w-full h-full bg-fb">
                              <span>Something</span>
                              <div className="w-full h-full bg-fb p-8">
                                    <h1>DASHBOARD</h1>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Admin;
