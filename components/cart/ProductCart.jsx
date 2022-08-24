import {
	Container,
	FormControl,
	Grid,
	MenuItem,
	Paper,
	Select,
	Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import formatNumber from '../../utils/formatNumber';
import StyledSelect from './StyledSelect';
const ProductCart = () => {
	return (
		<Container maxWidth={false}>
			<Paper variant='outlined' square>
				<Grid container spacing={0}>
					<Grid item xs={5} md={4}>
						1
					</Grid>
					<Grid item xs={7} md={8} p={2} pr={6}>
						<Stack direction='column'>
							<Stack
								direction='row'
								justifyContent='space-between'>
								<Typography>
									<Link href={`/products/${1}`}>
										GIÀY STAN SMITH
									</Link>
								</Typography>
								<Typography className='font-medium'>
									{formatNumber(1050000)}
								</Typography>
							</Stack>
							<Typography>
								BLISS / BLISS / SOLAR YELLOW
							</Typography>
							<Typography>KÍCH CỠ: 10.5 UK</Typography>
							<Typography className='font-medium'>
								Mặt hàng có sẵn mới nhất
							</Typography>
							<FormControl
								sx={{ mt: 5, width: 100 }}
								variant='standard'>
								<Select
									labelId='demo-customized-select-label'
									id='demo-customized-select'
									value={10}
									onChange={() => {}}
									input={<StyledSelect />}
									MenuProps={{
										sx: {
											'&& .MuiMenuItem-root.Mui-selected':
												{
													backgroundColor: '#eceff1',
												},
											'&& .MuiPaper-root.MuiMenu-paper': {
												marginTop: '0px',
												border: '1px solid #000',
												borderRadius: '0px',
												width: '100px',
											},
										},
									}}>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={30}>30</MenuItem>
								</Select>
							</FormControl>
							{/* <FormControl sx={{ m: 1 }} variant='standard'>
								<Select
									labelId='demo-customized-select-label'
									id='demo-customized-select'
									value={10}
									onChange={() => {}}
									MenuProps={{
										sx: {
											'&& .MuiMenuItem-root.Mui-selected':
												{
													backgroundColor: '#eceff1',
												},
										},
									}}
									input={<StyledSelect />}>
									<MenuItem value=''>
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl> */}
						</Stack>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default ProductCart;
