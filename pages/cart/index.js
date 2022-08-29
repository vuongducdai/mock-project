import React from "react";
import cartApi from "../../api/cart";
import Cart from "../../components/cart/Cart.jsx";
import MainLayout from "../../components/layout/main";
const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export async function getStaticProps() {
  const res = await cartApi.getCartList(1);
  const data = res.data;
  console.log("Cart product", data);

  return {
    props: {
      cartProducts: data,
    },
  };
}

CartPage.Layout = MainLayout;

export default CartPage;
