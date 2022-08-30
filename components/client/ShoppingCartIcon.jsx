import ClickAwayListener from '@mui/base/ClickAwayListener';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Badge, Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useCart } from '../../api/cart';
import BlackButton from '../BlackButton';
import { ProductColumn } from './ProductColumn';

const EmptyCart = () => {
	return (
		<Typography variant='h5' align='center'>
			TÚI CỦA BẠN TRỐNG
		</Typography>
	);
};

const HasItemCart = ({ productList }) => {
	const router = useRouter();
	const handleClick = () => {
		router.push('/cart/');
	};

	return (
		<Stack>
			<ProductColumn productList={productList} />
			<BlackButton title='Xem giỏ hàng' onClick={handleClick} />
		</Stack>
	);
};

const ShoppingCartFlyout = ({ productList }) => {
	return (
		<Stack
			zIndex={1200}
			position={'absolute'}
			right={0}
			justifyContent='center'
			bgcolor='white'
			width={400}
			px={'30px'}
			py={'20px'}
			className='drop-shadow-xl'>
			{productList.length !== 0 ? (
				<HasItemCart productList={productList} />
			) : (
				<EmptyCart />
			)}
		</Stack>
	);
};

export const ShoppingCartIcon = () => {
	const [openCart, setOpenCart] = useState(false);
	// const productList = useSelector(getCartList);
	const { data } = useCart(7);

	const productList = data?.products;

	const handleClick = () => {
		setOpenCart(state => !state);
	};

	const handleClickAway = () => {
		setOpenCart(false);
	};

	return (
		<Stack
			width={48}
			height={48}
			align='center'
			justifyContent='center'
			alignItems='center'
			className='cursor-pointer'>
			<Box position='relative'>
				<ClickAwayListener onClickAway={handleClickAway}>
					<Box>
						<Badge
							badgeContent={productList?.length}
							max={10}
							color='primary'>
							<ShoppingBagOutlinedIcon onClick={handleClick} />
						</Badge>
						{openCart && (
							<ShoppingCartFlyout productList={productList} />
						)}
					</Box>
				</ClickAwayListener>
			</Box>
		</Stack>
	);
};
