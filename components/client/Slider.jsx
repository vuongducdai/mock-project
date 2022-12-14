import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import WestTwoToneIcon from '@mui/icons-material/WestTwoTone';
import { Box, Grid } from '@mui/material';
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

	const CustomLeftArrow = ({ onClick }) => (
		<WestTwoToneIcon
			fontSize='small'
			onClick={() => onClick()}
			className='text-center react-multiple-carousel__arrow react-multiple-carousel__arrow--left'
		/>
	);
	const CustomRightArrow = ({ onClick }) => (
		<EastTwoToneIcon
			fontSize='small'
			onClick={() => onClick()}
			className='text-center react-multiple-carousel__arrow react-multiple-carousel__arrow--right'
		/>
	);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
			paritialVisibilityGutter: 60,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
			paritialVisibilityGutter: 50,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
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
				customRightArrow={<CustomRightArrow />}
				customLeftArrow={<CustomLeftArrow />}
				responsive={responsive}
				// infinite={true}
				autoPlaySpeed={3000}
				autoPlay={true}
				keyBoardControl={true}
				slidesToSlide={1}
				transitionDuration={500}
				containerClass='carousel-container'
				removeArrowOnDeviceType={['tablet', 'mobile']}>
				{arrProduct.map(item => {
					return <ProductCard key={item._id} item={item} />;
				})}
			</Carousel>
		);
	};

	const [listActive, setListActive] = useState(1);

	const handleSetListActive = id => {
		setListActive(id);
	};

	return (
		<div className='mx-4 mt-2'>
			<Box className='flex border-y-2 mb-4'>
				<span
					onClick={() => handleSetListActive(1)}
					className={`p-2 cursor-pointer text-neutral-500 ${listActive === 1
						? 'border-b-2 border-b-black text-black'
						: ''
						} hover:border-b-2 border-b-black`}>
					H??ng m???i v???
				</span>
				{/* <span
					onClick={() => handleSetListActive(2)}
					className={`p-2 cursor-pointer text-neutral-500 ${listActive === 2
						? 'border-b-2 border-b-black text-black'
						: ''
						} hover:border-b-2 border-b-black`}>
					Tinh hoa adidas
				</span>
				<span
					onClick={() => handleSetListActive(3)}
					className={`p-2 cursor-pointer text-neutral-500 ${listActive === 3
						? 'border-b-2 border-b-black ext-black'
						: ''
						} hover:border-b-2 border-b-black`}>
					S???p c??
				</span> */}
			</Box>
			{listSlider()}
		</div>
	);
}
