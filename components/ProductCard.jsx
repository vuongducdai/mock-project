import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';
// import ImageProductExample from '../../public/assets/image/NMD_S1.png';

export default function ProductCard({ item, index }) {
	const { url } = item;
	return (
		<>
			<Link href={`products/${index}`} className='no-underline'>
				<Card className='mb-10 border-black shadow-none cursor-pointer hover:border mx-0.5 group'>
					<div className='relative'>
						<Image
							src={url}
							alt='image item'
							width='100%'
							height='100%'
							layout='responsive'
						/>
						{/* <img src={url} atl='image item' /> */}
						<div className='mx-1 px-1 bg-zinc-50 absolute bottom-[0%] group-hover:bottom-[4%]'>
							200.000đ
						</div>
					</div>
					<CardContent>
						<Typography component='div' className='text-sm'>
							<span>Giày NMD_S1</span>
							<br />
							<span className='text-neutral-500'>
								Nam Original
							</span>
							<br />
							<span>mới</span>
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</>
	);
}
