import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import formatNumber from '../../utils/formatNumber';

const ProductCard = ({ id, img, name, price, quantityOrder }) => {
	return (
		<Link href={`/products/${id}`}>
			<Stack direction='row' m={'5px'} className={'cursor-pointer'}>
				<Box pr={1}>
					<Image
						src={img}
						alt={name}
						width={90}
						height={90}
						layout='fixed'
					/>
				</Box>
				<Box>
					<Box width={150}>
						<Typography noWrap align='left'>
							{name}
						</Typography>
					</Box>
					<Typography align='left'>{formatNumber(price)}</Typography>
					<Typography align='left' color={`text.secondary`}>
						{quantityOrder} sản phẩm
					</Typography>
				</Box>
			</Stack>
		</Link>
	);
};

export const ProductColumn = ({ productList }) => {
	const productListJSX = productList
		.slice(0, 4)
		.map((item, index) => (
			<ProductCard
				id={item.id}
				key={item.name + index}
				img={item.img}
				name={item.name}
				price={item.price}
				quantityOrder={item.quantityOrder}
			/>
		));
	return (
		<Stack p={'5px'}>
			<Typography variant='h6' align='left'>
				SẢN PHẨM
			</Typography>
			{productListJSX}
		</Stack>
	);
};
