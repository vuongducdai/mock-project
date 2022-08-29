import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import LoadingProduct from "../../components/client/LoadingProduct";
import MainLayout from "../../components/layout/main";
import ProductDetail from "../../components/product/ProductDetail";

const Product = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingProduct />;
  }

  return (
    <>
      <ProductDetail productProps={props.data} />
    </>
  );
};

export const getStaticPaths = async () => {
  console.log("\n GET STATIC PATHS");
  const res = await axios.get(
    "https://63030a4dc6dda4f287c1d8d4.mockapi.io/product?page=1&limit=10"
  );
  const data = res.data;
  const paths = data.products.map((productItem) => ({
    params: { id: productItem.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  console.log("\n GET STATIC PROPS", context.params?.id);

  const productId = context.params?.id;
  if (!productId) return { notFound: true };
  const res = await axios.get(
    `https://63030a4dc6dda4f287c1d8d4.mockapi.io/product/${productId}`
  );
  const data = res.data;
  console.log(data);

  return {
    props: { data },
  };
};

Product.Layout = MainLayout;

export default Product;
