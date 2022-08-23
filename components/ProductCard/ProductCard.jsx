import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageProductExample from '../../public/assets/image/NMD_S1.png';
import Image from 'next/image';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

export default function ProductCard() {
    return (
        <>
            <Paper className="w-1/4 flex">
                <Card sx={{ maxWidth: 1 }} className="border-black shadow-none cursor-pointer " >
                    <Image
                        component="img"
                        height="540"
                        src={ImageProductExample}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography component="div" className="text-sm">
                            <span>
                                Giày NMD_S1
                            </span>
                            <br />
                            <span className="text-gray-800">
                                Nam Original
                            </span>
                            <br />
                            <span>
                                mới
                            </span>
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        </>


    )
}
