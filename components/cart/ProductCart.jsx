import CloseIcon from '@mui/icons-material/Close';
import {
	Alert,
	Box,
	Container,
	FormControl,
	Grid,
	IconButton,
	MenuItem,
	Paper,
	Select,
	Snackbar,
	Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSWRConfig } from 'swr';
import { deleteCart, removeItemCart, useCart } from '../../api/cart';
import { SERVER_URL } from '../../api/requestMethod';
import formatNumber from '../../utils/formatNumber';
import StyledDialog from '../StyledDialog';
import StyledSelect from './StyledSelect';
const ProductCart = ({
	product: { id, name, color, img, material, price, quantityOrder },
	cartId,
}) => {
	const { data } = useCart(7);
	const { mutate } = useSWRConfig();
	//Hooks for add cart successfully dialog
	const [open, setOpen] = useState(false);
	const [quantity, setQuantity] = useState(quantityOrder);

	const [openNotify, setOpenNotify] = React.useState(false);

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
	const handleCloseNotify = () => {
		setOpenNotify(false);
	};
	const handleChangeQuantity = e => {
		setQuantity(e.target.value);
	};
	const handleDeleteCart = id => {
		if (data) {
			const products = data.products.filter(item => item.id !== id);
			if (products.length === 0) {
				mutate(`${SERVER_URL}/cart/find/7`, deleteCart(cartId), {
					revalidate: false,
				});
				return;
			}
			mutate(
				`${SERVER_URL}/cart/find/7`,
				removeItemCart(data, products, cartId),
				{
					revalidate: false,
				},
			);
			setOpenNotify(true);
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
							<Link href={`/products/${id}`}>
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
									<Link href={`/products/${id}`}>{name}</Link>
								</Typography>
								<Typography className='font-medium'>
									{formatNumber(price)}
								</Typography>
							</Stack>
							<Typography
								sx={{
									textTransform: 'uppercase',
								}}>
								{color}
							</Typography>
							<Typography
								sx={{
									textTransform: 'uppercase',
								}}>
								{material}
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
									value={quantity}
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
				onDelete={() => handleDeleteCart(id)}
			/>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				open={openNotify}
				autoHideDuration={3000}
				onClose={handleCloseNotify}>
				<Alert
					onClose={handleCloseNotify}
					variant='filled'
					severity='success'
					sx={{ width: '100%' }}>
					Xoá sản phẩm thành công
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default ProductCart;
