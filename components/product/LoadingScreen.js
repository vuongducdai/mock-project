import { Backdrop, CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';

const LoadingScreen = ({ open }) => {
	return (
		<Backdrop
			sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
			open={open}>
			<Stack gap={1} justifyContent='center' alignItems='center'>
				<CircularProgress color='inherit' />
				<Typography>Loading...</Typography>
			</Stack>
		</Backdrop>
	);
};

export default LoadingScreen;
