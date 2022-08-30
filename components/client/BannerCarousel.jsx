import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselCard = ({ imageURL, title, description }) => {
	const beforeAfterButtonStyle =
		'relative bg-black text-white p-4 ' +
		'before:w-[100%] before:h-[3px] before:absolute before:-bottom-[3px] before:left-[3px] before:border-b before:border-l before:border-black ' +
		'after:h-[100%] after:w-[3px] after:absolute after:top-[3px] after:-right-[3px] after:border-t after:border-r after:border-black ' +
		'hover:text-slate-500	 duration-200 ';

	return (
		<div
			style={{ backgroundImage: `url(${imageURL})` }}
			className='flex justify-start items-center min-h-[700px] pl-[60px] min-w-[100%]'>
			<div className='text-left max-w-[33%]'>
				<h1 className='text-5xl font-bond'>{title}</h1>
				<p className='text-lg py-[20px]'>{description}</p>
				<button className={beforeAfterButtonStyle}>
					<div className='flex justify-between w-[100%]'>
						<span>SHOP NOW</span>
						<span>
							<TrendingFlatIcon className='w-[100%]' />
						</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export const BannerCarousel = () => {
	return (
		<Carousel className='mt-26' autoPlay='true' showThumbs={false}>
			<div>
				<CarouselCard
					imageURL='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/YZY_FOAM_RNR_SAND_HP-ADULT-D_tcm337-926128.jpg'
					title='YZY FOAM RNR SAND'
					description='AUGUST 26 2022 - AVAILABLE THROUGH THE ADIDAS APP. DOWNLOAD, REGISTER, PARTICIPATE'
				/>
			</div>

			<div>
				<CarouselCard
					imageURL='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/originals-fw22-nmd_s1_coreblack-hp-mh-d_tcm337-922398.png'
					title='NMD_S1'
					description='AUGUST 26 2022 - AVAILABLE THROUGH THE ADIDAS APP. DOWNLOAD, REGISTER, PARTICIPATE'
				/>
			</div>
		</Carousel>
	);
};
