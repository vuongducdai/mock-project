import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { BASE_URL, fetcher } from "../../api/getMethod";
import DataTable from "../../components/Admin/DataTable";
import Layout from "../../components/Admin/Layout";
import Sidebar from "../../components/Admin/Sidebar";

const Container = () => {
      const router = useRouter();
      const { id } = router.query;
      const { data, error } = useSWR(BASE_URL + id, fetcher);

      return (
            <div className="flex min-h-screen bg-fb">
                  <Sidebar />
                  <dir className="w-full h-full">
                        <Layout>
                              <DataTable
                                    product="Product"
                                    name="NAME"
                                    image="IMAGE"
                                    price="PRICE"
                                    color="COLOR"
                                    datas={data}
                                    size="SIZE"
                              />
                        </Layout>
                  </dir>
            </div>
      );
};

export default Container;
