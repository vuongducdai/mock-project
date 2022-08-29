import React, { useEffect, useState } from "react";
import DataTable from "../../../components/Admin/DataTable";

import { getProductList } from "../../../redux/admin/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../../components/Admin/Layout";

const Product = () => {
  const { products } = useSelector((state) => state.productSlice);
  
  const router = useRouter();
  const path = router.pathname.split("/")[2];
  console.log(path);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <Layout>
      {products.products && <DataTable datas={products.products} type={path} />}
    </Layout>
  );
};

export default Product;
