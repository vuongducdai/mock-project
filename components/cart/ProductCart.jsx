import CloseIcon from '@mui/icons-material/Close';
import {
	Box,
	Container,
	FormControl,
	Grid,
	IconButton,
	MenuItem,
	Paper,
	Select,
	Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSWRConfig } from 'swr';
import { useCart } from '../../api/cart';
import {
	BASE_URL,
	deleteCart,
	deleteExistProductCart,
	updateExistProductCart,
} from '../../api/requestMethod';
import { getUser } from '../../redux/admin/userSlice';
import formatNumber from '../../utils/formatNumber';
import mapColorData from '../../utils/mapColorData';
import LoadingScreen from '../product/LoadingScreen';
import StyledDialog from '../StyledDialog';
import StyledSelect from './StyledSelect';
const ProductCart = ({
	product: { _id, name, color, img, cat, price, quantityOrder },
	cartId,
	handleOpenNotify,
	handleSetTitle,
}) => {
	const user = useSelector(getUser);
	const { data } = useCart(user?._id);
	const { mutate } = useSWRConfig();
	//Hooks for add cart successfully dialog
	const [open, setOpen] = useState(false);
	const [openLoading, setIsOpenLoading] = useState(false);
	const renderSizes = [...Array(10).keys()].map((item, index) => (
		<MenuItem key={index + 1} value={index + 1}>
			{index + 1}
		</MenuItem>
	));

	const handleOpenDialog = () => {
		setOpen(true);
	};
	const handleCloseDialog = () => {
		setOpen(false);
	};
	const handleChangeQuantity = async e => {
		if (data) {
			setIsOpenLoading(true);
			await mutate(
				`${BASE_URL}/cart/find/${user._id ? user._id : 7}`,
				updateExistProductCart(data, cartId, _id, {
					quantityOrder: Number(e.target.value),
				}),
				{
					revalidate: false,
				},
			);
			setIsOpenLoading(false);
			handleSetTitle('Số lượng đã được cập nhật');
			handleOpenNotify();
			setOpen(false);
		}
	};
	const handleDeleteCart = async id => {
		if (data) {
			setIsOpenLoading(true);
			const products = data.products.filter(item => item._id !== id);
			if (products.length === 0) {
				await mutate(
					`${BASE_URL}/cart/find/${user._id ? user._id : 7}`,
					deleteCart(cartId),
					{
						revalidate: false,
					},
				);
				setIsOpenLoading(false);
				return;
			}
			await mutate(
				`${BASE_URL}/cart/find/${user._id ? user._id : 7}`,
				deleteExistProductCart(data, cartId, _id),
				{
					revalidate: false,
				},
			);
			setIsOpenLoading(false);
			handleSetTitle('Sản phẩm đã được xóa khỏi giỏ hàng');
			handleOpenNotify();
			setOpen(false);
		}
	};

	return (
		<Container maxWidth={false} disableGutters>
			<Paper variant='outlined' square className='relative'>
				<IconButton
					onClick={handleOpenDialog}
					aria-label='delete'
					sx={{ position: 'absolute', top: 1, right: 1, zIndex: 10 }}>
					<CloseIcon />
				</IconButton>
				<Grid container spacing={0}>
					<Grid item xs={5} md={4}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'column',
								width: '100%',
								height: '100%',
							}}>
							<Link href={`/products/${_id}`}>
								<a>
									<Image
										src={img}
										width={240}
										height={240}
										layout='responsive'
										alt='image item'
									/>
								</a>
							</Link>
						</Box>
					</Grid>
					<Grid item xs={7} md={8} p={2} pr={6}>
						<Stack direction='column'>
							<Stack
								direction='row'
								justifyContent='space-between'>
								<Typography
									sx={{
										textTransform: 'uppercase',
									}}>
									<Link href={`/products/${_id}`}>
										{name}
									</Link>
								</Typography>
								<Typography className='font-medium'>
									{formatNumber(price)}
								</Typography>
							</Stack>
							<Typography
								sx={{
									textTransform: 'uppercase',
								}}>
								{mapColorData(color)}
							</Typography>
							<Typography
								sx={{
									textTransform: 'uppercase',
								}}>
								{cat}
							</Typography>
							<Typography
								sx={{
									textTransform: 'uppercase',
								}}>
								KÍCH CỠ: 10.5 UK
							</Typography>
							<Typography className='font-medium'>
								Mặt hàng có sẵn mới nhất
							</Typography>
							<FormControl
								sx={{ mt: 5, width: 100 }}
								variant='standard'>
								<Select
									labelId='demo-customized-select-label'
									id='demo-customized-select'
									value={Number(quantityOrder)}
									onChange={handleChangeQuantity}
									input={<StyledSelect />}
									MenuProps={{
										sx: {
											'&& .MuiMenuItem-root.Mui-selected':
												{
													backgroundColor: '#eceff1',
												},
											'&& .MuiPaper-root.MuiMenu-paper': {
												marginTop: 0,
												border: '1px solid #000',
												borderTopWidth: '0.5px',
												borderRadius: 0,
												width: '100px',
											},
										},
									}}>
									{renderSizes}
								</Select>
							</FormControl>
						</Stack>
					</Grid>
				</Grid>
			</Paper>
			<StyledDialog
				open={open}
				setOpen={handleOpenDialog}
				title='Bạn có muốn xoá sản phẩm này ra khỏi giỏ hàng?'
				isDelete={true}
				hasContent={false}
				onClose={handleCloseDialog}
				onDelete={() => handleDeleteCart(_id)}
			/>

			<LoadingScreen open={openLoading} />
		</Container>
	);
};

export default ProductCart;
