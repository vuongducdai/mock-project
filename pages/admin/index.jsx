import React from "react";
import Chart from "../../components/Admin/Chart";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Admin/Sidebar";

const Admin = () => {

      return (
            <div className="flex h-screen w-full bg-fb">
                  <Sidebar />
                  <div className="flex flex-col w-full">
                        <Navbar />
                        <div className="w-full h-full bg-fb">
                              <span>Something</span>
                              <div className="w-full h-full bg-fb p-8">
                                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Admin;
