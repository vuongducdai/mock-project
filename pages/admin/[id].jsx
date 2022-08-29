import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getUsersList } from "../../redux/admin/userSlice";
import { getProductList } from "../../redux/admin/productSlice";

import DataTable from "../../components/Admin/DataTable";

import Layout from "../../components/Admin/Layout";
import Sidebar from "../../components/Admin/Sidebar";
import Newitem from "../../components/Admin/Newitem";

const Container = () => {
  const { products } = useSelector((state) => state.productSlice);
  const { users } = useSelector((state) => state.userSlice);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getProductList());
  //   dispatch(getUsersList());
  
  // },[]);

  return (
    <div className="flex min-h-screen bg-fb transition-all duration-500">
      <Sidebar setOpen={setOpen} />
      <dir className="w-full h-full transition-all duration-1000">
        <Layout>
          {/* {id === "product"
            ? products.products && <DataTable datas={products.products} type='PRODUCTS'/>
            : users && <DataTable datas={users} type='USERS'/>} */}
        </Layout>
      </dir>
      {open && <Newitem setOpen={setOpen} />}
    </div>
  );
};

export default Container;
