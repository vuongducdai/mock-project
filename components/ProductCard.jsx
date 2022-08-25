// import { Link } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import formatNumber from "../utils/formatNumber";

export default function ProductCard({ item }) {
  const { img, name, price, id } = item;
  return (
    <Link href={`products/${id}`} className="no-underline">
      <Card
        elevation={0}
        className="mb-10 border-black shadow-none cursor-pointer hover:border mx-0.5 group"
      >
        <div className="relative shadow-none">
          {/* <img src={img} atl="image item" /> */}
          <Image src={img} alt="image product" width={280} height={200} />
          <div className="mx-1 px-1 bg-zinc-50 absolute bottom-[0%] group-hover:bottom-[4%]">
            {formatNumber(price)}
          </div>
        </div>
        <CardContent>
          <Typography component="div" className="text-sm">
            <span>{name}</span>
            <br />
            <span className="text-neutral-500">Nam Original</span>
            <br />
            <span>mới</span>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
