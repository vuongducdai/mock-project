import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useScrollDirection } from '../../hooks/useSCrollDirection';
import SearchBar from '../client/SearchBar';
import { ShoppingCartIcon } from '../client/ShoppingCartIcon';

const HeaderTitle = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-around'
			alignItems='center'
			bgcolor='black'
			height={30}
			color='white'>
			<Typography variant='body2'>
				MIỄN PHÍ GIAO HÀNG TRÊN 1.300.000 VNĐ
			</Typography>
			<Typography variant='body2'>TRẢ HÀNG DỄ DÀNG</Typography>
			<Typography variant='body2'>
				NAY ĐÃ CÓ THỂ THANH TOÁN VỚI THẺ TÍN DỤNG!
			</Typography>
		</Stack>
	);
};

const LoginSection = () => {
	return (
		<Link underline='none' href='#' variant='body2'>
			đăng nhập
		</Link>
	);
};

const LogoIcon = () => {
	return (
		<div className='flex'>
			<Link href='/'>
				<a>
					<Image
						src='https://www.adidas.com.vn/glass/react/f269eb7/assets/img/icon-adidas-logo.svg'
						alt='adidas logo'
						width={60}
						height={60}
						className='cursor-pointer relative top-[-17px]'
					/>
				</a>
			</Link>
		</div>
	);
};

export const Header = () => {
	const scrollDirection = useScrollDirection();

	return (
		<Box
			variant='header'
			className={`fixed ${
				scrollDirection === 'down'
					? '-top-28 inset-x-0'
					: 'top-0 inset-x-0'
			} transition-all duration-500 z-[1200] bg-white border-b`}>
			<HeaderTitle />
			<Stack
				justifyContent='space-between'
				px={'20px'}
				pt={'5px'}
				direction='row'>
				<LogoIcon />
				<Stack>
					<Box textAlign={'right'}>
						<LoginSection />
					</Box>
					<Stack justifyContent='center' direction='row'>
						<SearchBar />
						<ShoppingCartIcon />
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};
