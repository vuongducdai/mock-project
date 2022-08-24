import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Container } from "@mui/material";
import Head from "next/head";
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../components/ProductCard";
import Slider from '../components/Slider';

export default function Home() {
  const arrBlogs = [
    {
      id: 1,
      title: 'mountain',
      url: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/fde4287a315a464d915bad25006ec160_9366/%C3%A1o-thun-ba-l%C3%A1-essentials-adicolor-loungewear.jpg',

      desc: 'i love nature'
    },
    {
      id: 2,
      title: 'waterfall',
      url: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/5232fa5d0a1e4a1c92d1aed8008f493f_9366/%C3%A1o-thun-class-of-72-adidas-originals-unisex.jpg',

      desc: 'i love water'
    },
    {
      id: 3,
      title: 'forest',
      url: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/fde4287a315a464d915bad25006ec160_9366/%C3%A1o-thun-ba-l%C3%A1-essentials-adicolor-loungewear.jpg',

      desc: 'i love forest'
    },
    {
      id: 4,
      title: 'sea',
      url: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/fde4287a315a464d915bad25006ec160_9366/%C3%A1o-thun-ba-l%C3%A1-essentials-adicolor-loungewear.jpg',
      desc: 'i love sea'
    },
    {
      id: 5,
      title: 'sea',
      url: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/fde4287a315a464d915bad25006ec160_9366/%C3%A1o-thun-ba-l%C3%A1-essentials-adicolor-loungewear.jpg',
      desc: 'i love sea'
    },
    {
      id: 6,
      title: 'sea',
      url: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/fde4287a315a464d915bad25006ec160_9366/%C3%A1o-thun-ba-l%C3%A1-essentials-adicolor-loungewear.jpg',
      desc: 'i love sea'
    },
  ]

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-red-300">Hello World</h1>
      {/* <Container className="product__slider">
        <Box className="flex border-y-2 mb-4">
          <span className='p-2 cursor-pointer'>Hàng mới về</span>
          <span className='p-2 cursor-pointer'>Tinh hoa adidas</span>
          <span className='p-2 cursor-pointer border-b-2 border-b-black'>Sắp có</span>
        </Box>
        <Slider arrProduct={arrBlogs} />
      </Container> */}

      <Slider arrProduct={arrBlogs} />

    </div>
  );
}
