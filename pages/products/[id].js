import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/layout/main";
import ProductDetail from "../../components/product/ProductDetail";

const Product = (props) => {
  return (
    <>
      <ProductDetail productProps={props.data} />
    </>
  );
};

export async function getServerSideProps(context) {
  const productId = context.query.id;
  const res = await axios.get(
    `https://63030a4dc6dda4f287c1d8d4.mockapi.io/product/${productId}`
  );
  const data = res.data;
  console.log(data);

  return {
    props: { data },
  };
}

Product.Layout = MainLayout;

export default Product;
