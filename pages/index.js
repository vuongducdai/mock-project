import Head from "next/head";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import useSWR from "swr";
import { BannerCarousel } from "../components/client/BannerCarousel";
import ListProductComponent from "../components/client/ListProductComponent";
import Slider from "../components/client/Slider";
import MainLayout from "../components/layout/main";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from "@mui/material";
import { BASE_URL } from "../api/requestMethod";

export default function Home(props) {

      const [page, setPage] = useState(1);

      const fetcher = url => fetch(url).then(r => r.json())

      const { data } = useSWR(`${BASE_URL}/product/pages?page=${page}`, fetcher,
            {
                  dedupingInterval: 15000
            }
      );

      const handlePagination = (event, value) => {
            setPage(value);
      }

      return (
            <>
                  <Head>
                        <title>Create Next App</title>
                        <meta name="description" content="Generated by create next app" />
                        <link rel="icon" href="/favicon.ico" />
                        <meta name="viewport" content="initial-scale=1, width=device-width" />
                  </Head>
                  
                  <BannerCarousel />
                  {data && <Slider arrProduct={data?.data.slice(0, 8)} />}
                  {data && <ListProductComponent arrProduct={data?.data} />}
                  {data && <Container >
                        <div className=' mb-4 flex flex-row justify-center'>
                              <div className="flex justify-between items-center">
                                    <div className='w-26 mx-4'>
                                          <Stack>
                                                <Pagination page={page} onChange={handlePagination} count={Math.ceil(data?.data.length / 10)} variant="outlined" color="secondary" />
                                          </Stack>
                                    </div>
                              </div>
                        </div>
                  </Container>}
            </>
      );
}

Home.Layout = MainLayout;
