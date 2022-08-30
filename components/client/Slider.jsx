import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../ProductCard';

export default function Slider({ arrProduct }) {
	const CustomDot = ({ onMove, index, onClick, active }) => {
		return (
			<li
				className={`cursor-pointer ${active ? 'active' : 'inactive'}`}
				onClick={() => onClick()}>
				<HorizontalRuleIcon />
			</li>
		);
	};

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
			paritialVisibilityGutter: 60,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			paritialVisibilityGutter: 50,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			paritialVisibilityGutter: 30,
		},
	};

	const listSlider = () => {
		return (
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				customDot={<CustomDot />}
				responsive={responsive}
				infinite={true}
				autoPlaySpeed={3000}
				autoPlay={true}
				keyBoardControl={true}
				slidesToSlide={2}
				transitionDuration={500}
				containerClass='carousel-container'
				removeArrowOnDeviceType={['tablet', 'mobile']}>
				{arrProduct.map((item, index) => {
					return <ProductCard key={item.id} item={item} />;
				})}
			</Carousel>
		);
	};

	const [listActive, setListActive] = useState(1);

	const handleSetListActive = id => {
		setListActive(id);
	};

	return (
		<Container className='product__slider mt-28'>
			<Box className='flex border-y-2 mb-4'>
				<span
					onClick={() => handleSetListActive(1)}
					className={`p-2 cursor-pointer text-neutral-500 ${
						listActive === 1
							? 'border-b-2 border-b-black text-black'
							: ''
					} hover:border-b-2 border-b-black`}>
					Hàng mới về
				</span>
				<span
					onClick={() => handleSetListActive(2)}
					className={`p-2 cursor-pointer text-neutral-500 ${
						listActive === 2
							? 'border-b-2 border-b-black text-black'
							: ''
					} hover:border-b-2 border-b-black`}>
					Tinh hoa adidas
				</span>
				<span
					onClick={() => handleSetListActive(3)}
					className={`p-2 cursor-pointer text-neutral-500 ${
						listActive === 3
							? 'border-b-2 border-b-black ext-black'
							: ''
					} hover:border-b-2 border-b-black`}>
					Sắp có
				</span>
			</Box>
			{listSlider()}
		</Container>
	);
}
