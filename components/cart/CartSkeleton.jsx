import { Box, Grid, Paper, Skeleton, Stack, Typography } from '@mui/material';
import React from 'react';

const CartSkeleton = () => {
	return (
		<Stack direction='column' pt={3} spacing={2} mt={6}>
			<Paper variant='outlined'>
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
							<Skeleton
								animation='wave'
								variant='rectangular'
								width='100%'
								height='100%'
							/>
						</Box>
					</Grid>
					<Grid item xs={7} md={8} p={2} pr={6}>
						<Stack direction='column'>
							<Stack direction='column'>
								<Typography
									sx={{
										textTransform: 'uppercase',
									}}>
									<Skeleton
										animation='wave'
										variant='rectangular'
										width='100%'
										height={60}
									/>
								</Typography>
							</Stack>
							<Typography
								sx={{
									textTransform: 'uppercase',
								}}>
								<Skeleton animation='wave' />
							</Typography>
							<Typography
								sx={{
									textTransform: 'uppercase',
								}}>
								<Skeleton animation='wave' />
							</Typography>
							<Skeleton variant='rectangular' animation='wave' />
						</Stack>
					</Grid>
				</Grid>
			</Paper>
		</Stack>
	);
};

export default CartSkeleton;
