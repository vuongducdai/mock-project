import React, { useEffect, useState } from "react";
import DataTable from "../../../components/Admin/DataTable";

import { getProductList } from "../../../redux/admin/productSlice";
import { useDispatch, useSelector } from "react-redux";
const Product = () => {
  const { products } = useSelector((state) => state.productSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div>
      {products.products && (
        <DataTable datas={products.products} type="PRODUCT" />
      )}
    </div>
  );
};

export default Product;
