import AddIcon from '@mui/icons-material/Add';
import {
	Alert,
	Divider,
	Grid,
	InputAdornment,
	Paper,
	Snackbar,
	Stack,
	Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import { useMemo, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useCart } from '../../api/cart';
import calculateQuantityCart from '../../utils/calculateQuantityCart';
import calculateTotalPrice from '../../utils/calculateTotalPrice';
import formatNumber from '../../utils/formatNumber';
import BlackButton from '../BlackButton';
import CartSkeleton from './CartSkeleton';
import ProductCart from './ProductCart';
import CssTextField from './StyledTextField';

const Cart = () => {
	const [title, setTitle] = useState('');
	const [openNotify, setOpenNotify] = useState(false);
	const { data, isValidating } = useCart(7);
	const products = data?.products;
	const totalPrice = useMemo(() => {
		if (products) return calculateTotalPrice(products);
	}, [products]);
	const quantityOrder = products?.length;

	const handleSetTitle = title => {
		setTitle(title);
	};

	const handleCloseNotify = () => {
		setOpenNotify(false);
	};

	const handleOpenNotify = () => {
		setOpenNotify(true);
	};

	const renderCart =
		products &&
		products.map(item => (
			<ProductCart
				key={item._id}
				product={item}
				cartId={data._id}
				handleOpenNotify={handleOpenNotify}
				handleSetTitle={handleSetTitle}
			/>
		));

	return (
		<>
			<Container
				fixed
				maxWidth={false}
				disableGutters={true}
				sx={{
					marginBottom: 2,
				}}>
				<Grid
					container
					spacing={{
						xs: 0,
						md: 5,
					}}>
					<Grid item md={8} xs={12}>
						{isValidating ? (
							<>
								<CartSkeleton />
							</>
						) : (
							<Stack direction='column' pt={3} spacing={2}>
								<Typography
									noWrap
									sx={{
										fontWeight: 'bold',
										typography: { sm: 'h5', md: 'h4' },
									}}>
									{quantityOrder > 0
										? 'GIỎ HÀNG CỦA BẠN'
										: 'TÚI CỦA BẠN TRỐNG'}
								</Typography>
								{quantityOrder > 0 ? (
									<>
										<Stack
											direction='row'
											justifyContent='flex-start'
											alignItems='flex-start'
											spacing={1}>
											<Typography gutterBottom>
												TỔNG CỘNG (
												{calculateQuantityCart(
													products,
												)}{' '}
												sản phẩm)
											</Typography>
											<Typography
												gutterBottom
												sx={{
													fontWeight: 'bold',
												}}>
												{formatNumber(totalPrice)}
											</Typography>
										</Stack>
										<Typography gutterBottom>
											Các mặt hàng trong giỏ hàng của bạn
											không được bảo lưu — hãy kiểm tra
											ngay để đặt hàng.
										</Typography>
										<Divider
											className='border-black mdMui:hidden block'
											sx={{
												borderColor: 'black',
												display: {
													md: 'none',
												},
											}}
										/>
										{renderCart}
										<BlackButton
											title='Thanh toán'
											className='w-1/2 mt-3 mdMui:flex hidden'
										/>
									</>
								) : (
									<>
										<Typography gutterBottom>
											Once you add something to your bag -
											it will appear here. Ready to get
											started?
										</Typography>
										<BlackButton
											title='GET STARTED'
											className='w-1/2 mt-3 smMui:w-1/3 flex'
										/>
									</>
								)}
							</Stack>
						)}
					</Grid>
					<Grid item md={4} xs={12}>
						{isValidating ? (
							<CartSkeleton />
						) : (
							<Stack
								direction={{
									md: 'column',
									xs: 'column-reverse',
								}}
								mt={10}
								spacing={2}>
								{quantityOrder > 0 && (
									<>
										<BlackButton title='Thanh toán' />

										<Paper
											variant='outlined'
											sx={{
												padding: 2,
											}}
											square>
											<Typography
												noWrap
												gutterBottom
												sx={{
													fontWeight: 'bold',
													typography: {
														sm: 'body1',
														md: 'h6',
													},
												}}>
												TÓM TẮT ĐƠN HÀNG
											</Typography>
											<Stack
												mb={1}
												direction='row'
												justifyContent='space-between'
												alignItems='center'>
												<Typography gutterBottom>
													{calculateQuantityCart(
														products,
													)}{' '}
													SẢN PHẨM
												</Typography>
												<Typography gutterBottom>
													{formatNumber(totalPrice)}
												</Typography>
											</Stack>
											<Stack
												mb={1}
												direction='row'
												justifyContent='space-between'
												alignItems='center'>
												<Typography gutterBottom>
													GIAO HÀNG
												</Typography>
												<Typography gutterBottom>
													MIỄN PHÍ
												</Typography>
											</Stack>
											<Stack
												direction='row'
												justifyContent='space-between'
												alignItems='center'>
												<Typography
													gutterBottom
													sx={{
														fontWeight: 'bold',
													}}>
													TỔNG
												</Typography>
												<Typography
													gutterBottom
													sx={{
														fontWeight: 'bold',
													}}>
													{formatNumber(totalPrice)}
												</Typography>
											</Stack>
											<Typography
												gutterBottom
												variant='subtitle2'
												component='p'>
												(Đã bao gồm thuế 200.000₫)
											</Typography>
										</Paper>
										<CssTextField
											label='Nhập mã khuyến mãi của bạn'
											id='custom-css-outlined-input'
											InputProps={{
												endAdornment: (
													<InputAdornment position='end'>
														<AddIcon />
													</InputAdornment>
												),
											}}
										/>
									</>
								)}
								<Stack
									mt={2}
									direction='column'
									className='hidden mdMui:flex'>
									<Typography gutterBottom>
										PHƯƠNG THỨC THANH TOÁN ĐƯỢC CHẤP NHẬN
									</Typography>

									<Image
										src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/paymentmethodsvmp_VN_new_tcm337-713926.png'
										alt='brand'
										width={230}
										height={56}
										layout='fixed'
									/>
								</Stack>
							</Stack>
						)}
					</Grid>
				</Grid>
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
						{title}
					</Alert>
				</Snackbar>
			</Container>
		</>
	);
};

export default Cart;
