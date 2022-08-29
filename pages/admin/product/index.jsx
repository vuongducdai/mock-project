import React, { useEffect, useState } from "react";
import DataTable from "../../../components/Admin/DataTable";
import { getProductList } from "../../../redux/admin/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../../components/Admin/Layout";
import Loading from "../../../components/Admin/Loading";

const Product = () => {
      const { products, loading } = useSelector((state) => state.productSlice);
      const router = useRouter();
      const path = router.pathname.split("/")[2];
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getProductList());
      }, [dispatch]);

      return (
            <Layout type={path}>
                  {loading
                        ? <Loading />
                        : <DataTable datas={products} type={path} />}
            </Layout>
      );
};

export default Product;
