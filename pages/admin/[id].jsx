import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { BASE_URL, fetcher } from "../../api/getMethod";
import DataTable from "../../components/Admin/DataTable";
import Layout from "../../components/Admin/Layout";
import Sidebar from "../../components/Admin/Sidebar";
import UserTable from '../../components/Admin/UserTable'
const Container = () => {
      const router = useRouter();
      const { id } = router.query;
      // const { mutate } = useSWRConfig()
      const { data, error } = useSWR(BASE_URL + id, fetcher);

      return (
            <div className="flex min-h-screen bg-fb">
                  <Sidebar />
                  <dir className="w-full h-full">
                        <Layout>
                              {id === "product" ? (
                                    <DataTable
                                          product="Product"
                                          name="NAME"
                                          image="IMAGE"
                                          price="PRICE"
                                          color="COLOR"
                                          datas={data}
                                          size="SIZE"
                                    />
                              ) : (
                                    <UserTable
                                          type="User"
                                          name="NAME"
                                          email="EMAIL"
                                          address="ADDRESS"
                                          phone="PHONE"
                                          datas={data}
                                          isAdmin="TYPE"
                                    />
                              )}
                        </Layout>
                  </dir>
            </div>
      );
};

export default Container;
