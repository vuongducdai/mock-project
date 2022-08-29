import React, { useEffect, useState } from "react";
import DataTable from "../../../components/Admin/DataTable";

import { getUsersList } from "../../../redux/admin/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../../components/Admin/Layout";
const Product = () => {
  const { users } = useSelector((state) => state.userSlice);
  
  const router = useRouter();
  const path = router.pathname.split('/')[2]
  console.log(path)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
    
  }, []);

  return (
    <Layout>
      {users && <DataTable datas={users} type={path}/>}
    </Layout>
  );
};

export default Product;
