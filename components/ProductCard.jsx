// import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import formatNumber from '../utils/formatNumber';

export default function ProductCard({ item }) {
  const { img, name, price, id, size, material } = item;
  return (
    <Link href={`products/${id}`} className="no-underline">
      <Card
        sx={{ borderRadius: '0' }}
        elevation={0}
        className="mb-10 border-black shadow-none cursor-pointer hover:border group mx-px hover:mx-0"
      >
        <div className="relative shadow-none">
          {/* <img src={img} atl="image item" /> */}
          <Image src={img} alt="image product" width={290} height={300} />
          <div className="mx-1 px-1 bg-zinc-50 absolute bottom-[2%] group-hover:bottom-[4%]">
            {formatNumber(price)}
          </div>
        </div>
        <CardContent>
          <Typography component="div">
            <p className='truncate text-sm'>{name}</p>
            <span className="text-neutral-500 text-sm">Nam Original</span>
            <br />
            <span className='text-sm'>mới</span>
            <br />
            <span>{material}</span>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
