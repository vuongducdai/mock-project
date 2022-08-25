import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import { BASE_URL, fetcher } from "../../api/getMethod";
import DataTable from "../../components/Admin/DataTable";
import UserTable from "../../components/Admin/UserTable";
import Layout from "../../components/Admin/Layout";
import Sidebar from "../../components/Admin/Sidebar";

import { getProductList } from "../../redux/admin/productSlice";
import { getUsersList } from "../../redux/admin/userSlice";
const Container = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log;
  // // const { mutate } = useSWRConfig()
  // const { data, error } = useSWR(BASE_URL + id, fetcher);
  const { products } = useSelector((state) => state.productSlice);

  const { users } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
    dispatch(getUsersList());
  }, []);
 

  return (
    <div className="flex min-h-screen bg-fb">
      <Sidebar />
      <dir className="w-full h-full">
        <Layout>
          {id === "product" 
          ? (
            <DataTable
              type="Product"
              name="NAME"
              image='IMAGE'
              price="PRICE"
              color="COLOR"
              datas={products.products}
              size="SIZE"
              material='MATERIALS'
            />
          ) 
          : (
            <UserTable
              type="User"
              name="NAME"
              email="EMAIL"
              address="ADDRESS"
              phone="PHONE"
              datas={users}
              isAdmin="TYPE"
            />
          )}
        </Layout>
      </dir>
    </div>
  );
};

export default Container;
