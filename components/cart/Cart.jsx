import AddIcon from '@mui/icons-material/Add';
import {
	Divider,
	Grid,
	InputAdornment,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import formatNumber from '../../utils/formatNumber';
import BlackButton from '../BlackButton';
import ProductCart from './ProductCart';
import CssTextField from './StyledTextField';
const Cart = () => {
	return (
		<>
			<Container fixed maxWidth={false} disableGutters={true}>
				<Grid
					container
					spacing={{
						xs: 0,
						md: 5,
					}}>
					<Grid item md={8} xs={12}>
						<Stack direction='column' pt={3} spacing={2}>
							<Typography
								noWrap
								sx={{
									fontWeight: 'bold',
									typography: { sm: 'h5', md: 'h4' },
								}}>
								GIỎ HÀNG CỦA BẠN
							</Typography>
							<Stack
								direction='row'
								justifyContent='flex-start'
								alignItems='flex-start'
								spacing={1}>
								<Typography gutterBottom>
									TỔNG CỘNG (1 sản phẩm)
								</Typography>
								<Typography
									gutterBottom
									sx={{
										fontWeight: 'bold',
									}}>
									{formatNumber(2700000)}
								</Typography>
							</Stack>
							<Typography gutterBottom>
								Các mặt hàng trong giỏ hàng của bạn không được
								bảo lưu — hãy kiểm tra ngay để đặt hàng.
							</Typography>
							<Divider className='border-black mdMui:hidden block' />
							<ProductCart />
							<BlackButton
								title='Thanh toán'
								className='w-1/2 mt-3 mdMui:flex hidden'
							/>
						</Stack>
					</Grid>
					<Grid item md={4} xs={12}>
						<Stack
							direction={{
								md: 'column',
								xs: 'column-reverse',
							}}
							mt={10}
							spacing={2}>
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
										typography: { sm: 'body1', md: 'h6' },
									}}>
									TÓM TẮT ĐƠN HÀNG
								</Typography>
								<Stack
									mb={1}
									direction='row'
									justifyContent='space-between'
									alignItems='center'>
									<Typography gutterBottom>
										1 SẢN PHẨM
									</Typography>
									<Typography gutterBottom>
										{formatNumber(2700000)}
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
										{formatNumber(2700000)}
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
									layout='responsive'
								/>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Cart;
