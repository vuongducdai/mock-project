import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Head from 'next/head';
import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import useSWR from 'swr';
import { BASE_URL, fetcher } from '../api/requestMethod';
import { BannerCarousel } from '../components/client/BannerCarousel';
import ListProductComponent from '../components/client/ListProductComponent';
import LoadingProduct from '../components/client/LoadingProduct';
import Slider from '../components/client/Slider';
import MainLayout from '../components/layout/main';

export default function Home() {
	const [page, setPage] = useState(1);
	const { data, isValidating } = useSWR(
		`${BASE_URL}/product/pages?page=${page}`,
		fetcher,
		{
			dedupingInterval: 15000,
		},
	);

	const handlePagination = (event, value) => {
		setPage(value);
	};

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<BannerCarousel />
			{isValidating ? (
				<LoadingProduct />
			) : (
				<>{data && <Slider arrProduct={data?.data.slice(0, 8)} />}</>
			)}
			{isValidating ? (
				<LoadingProduct />
			) : (
				<>{data && <ListProductComponent arrProduct={data?.data} />}</>
			)}
			{isValidating ? (
				<LoadingProduct />
			) : (
				<>
					{data && (
						<Container>
							<div className='mb-4 flex flex-row justify-center'>
								<div className='flex justify-between items-center'>
									<div className='w-26 mx-4'>
										<Stack>
											<Pagination
												page={page}
												onChange={handlePagination}
												count={Math.ceil(
													data?.data.length / 10,
												)}
												variant='outlined'
												color='secondary'
											/>
										</Stack>
									</div>
								</div>
							</div>
						</Container>
					)}
				</>
			)}
		</>
	);

	// const handlePagination = (event, value) => {
	// 	setPage(value);
	// };

	// return (
	// 	<>
	// 		<Head>
	// 			<title>Create Next App</title>
	// 			<meta
	// 				name='description'
	// 				content='Generated by create next app'
	// 			/>
	// 			<link rel='icon' href='/favicon.ico' />
	// 			<meta
	// 				name='viewport'
	// 				content='initial-scale=1, width=device-width'
	// 			/>
	// 		</Head>

	// 		<BannerCarousel />
	// 		{data && <Slider arrProduct={data?.data.slice(0, 8)} />}
	// 		{data && <ListProductComponent arrProduct={data?.data} />}
	// 		{data && (
	// 			<Container>
	// 				<div className=' mb-4 flex flex-row justify-center'>
	// 					<div className='flex justify-between items-center'>
	// 						<div className='w-26 mx-4'>
	// 							<Stack>
	// 								<Pagination
	// 									page={page}
	// 									onChange={handlePagination}
	// 									count={Math.ceil(
	// 										data?.data.length / 10,
	// 									)}
	// 									variant='outlined'
	// 									color='secondary'
	// 								/>
	// 							</Stack>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</Container>
	// 		)}
	// 	</>
	// );
}

Home.Layout = MainLayout;
