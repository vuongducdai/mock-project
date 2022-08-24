import { Grid, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import formatNumber from '../../utils/formatNumber';
import ProductCart from './ProductCart';

const Cart = () => {
	return (
		<>
			<Container fixed maxWidth={false} disableGutters={true}>
				<Grid container spacing={1}>
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
							<ProductCart />
						</Stack>
					</Grid>
					<Grid item md={4} xs={12}>
						GIỎ HÀNG CỦA BẠN
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Cart;
