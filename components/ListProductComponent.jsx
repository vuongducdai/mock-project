import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Drawer, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import { blue, brown, green, pink, red, yellow } from '@mui/material/colors';
import ItemDrawer from './ItemDrawer';
import ProductCard from './ProductCard';



export default function ListProductComponent({ arrProduct }) {
    const arrTitleFilter = [
        {
            id: 1,
            content: 'Tất cả quần áo nam',
        },
        {
            id: 2,
            content: 'Jackets',
        },
        {
            id: 3,
            content: 'Áo nỉ và Bộ đồ thể thao',
        },
        {
            id: 4,
            content: 'Áo Phông & Áo Polo',
        },
        {
            id: 5,
            content: 'Áo hoodie & Áo khoác',
        },
        {
            id: 6,
            content: 'Quần',
        },
    ]
    const arrColor = [
        {
            id: 1,
            name: pink,
            color: 'pink'
        },
        {
            id: 2,
            name: blue,
            color: 'blue'
        },
        {
            id: 3,
            name: brown,
            color: '#ffdba3'
        },
        {
            id: 4,
            name: red,
            color: 'brown'
        },
        {
            id: 5,
            name: green,
            color: 'red'
        },
        {
            id: 6,
            name: yellow,
            color: 'yellow'
        }
    ]
    const arrTitleSortBy = [
        {
            id: 1,
            isLast: false,
            content: 'GIÁ (THẤP - CAO)',
        },
        {
            id: 2,
            isLast: true,
            content: 'GIÁ (CAO - THẤP)',
        },
    ]
    const arrSize = [
        {
            id: 1,
            content: '104',
        },
        {
            id: 2,
            content: '110',
        },
        {
            id: 3,
            content: '116',
        },
        {
            id: 4,
            content: '122',
        },
        {
            id: 5,
            content: '128',
        },
        {
            id: 6,
            content: '134',
        },
        {
            id: 7,
            content: '140',
        },
        {
            id: 8,
            content: '152',
        },
        {
            id: 9,
            content: '164',
        },
        {
            id: 10,
            content: '170',
        },
        {
            id: 11,
            content: '176',
        },
        {
            id: 12,
            content: '28',
        },
    ]

    const arrCatProduct = [
        {
            id: 1,
            content: 'T-shirts',
            quantity: 13,
        },
        {
            id: 2,
            content: 'Quần',
            quantity: 4,
        },
        {
            id: 3,
            content: 'Quần bó',
            quantity: 90,
        },
        {
            id: 4,
            content: 'Bộ đồ thể thao',
            quantity: 8,
        },
        {
            id: 5,
            content: 'Quần sort',
            quantity: 53,
        },
        {
            id: 7,
            content: 'Áo khoác',
            quantity: 23,
        },
        {
            id: 8,
            content: 'Áo nỉ',
            quantity: 3,
        },
    ]


    const [titleActive, setTitleActive] = useState(1);
    const [isDraweOpen, setIsDrawerOpen] = useState(false);
    const [sortByActive, setSortByActive] = useState(1);
    const [sizeActive, setSizeActive] = useState(1);
    const [checked, setChecked] = useState([]);
    const [checkedColor, setCheckedColor] = useState([]);

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {

                return checked.filter(item => item !== id)
            }
            else {
                return [...prev, id,]
            }
        })
    }
    const handleCheckColor = (id) => {
        setCheckedColor(prev => {
            const isChecked = checkedColor.includes(id);
            if (isChecked) {

                return checkedColor.filter(item => item !== id)
            }
            else {
                return [...prev, id,]
            }
        })
    }

    const renderTitleFilter = () => {
        return (
            arrTitleFilter.map((title) => (
                <span
                    onClick={() => setTitleActive(title.id)}
                    key={title.id}
                    className={`p-2 cursor-pointer text-neutral-500 ${titleActive === title.id ? 'border-b-2 border-b-black text-black ' : ''} hover:border-b-2 border-b-black`}>
                    {title.content}
                </span>
            ))
        )
    }

    const renderTitleSortBy = () => {
        return (
            arrTitleSortBy.map((sortBy) => (
                <div
                    key={sortBy.id}
                    onClick={() => setSortByActive(sortBy.id)}
                    className={`cursor-pointer ${sortBy.isLast ? '' : 'border-b'} py-1.5 ${sortByActive === sortBy.id ? 'text-neutral-500 text-rose-600' : ''}`}
                >
                    {sortBy.content}
                </div>
            ))
        )
    }

    const renderSizeList = () => {
        return (
            <div className='flex flex-wrap'>
                {arrSize.map((size) => (
                    <div
                        onClick={() => setSizeActive(size.id)}
                        className={` ${sizeActive === size.id ? 'border-black' : ''} text-center py-4 w-28 border cursor-pointer hover:border-black`} key={size.id} >
                        {size.content}
                    </div>
                ))}
            </div>
        )
    }

    const renderCatProductList = () => {
        return (
            <div className='flex flex-col'>
                {arrCatProduct.map((cat) => (
                    <div onClick={() => handleCheck(cat.id)} className="p-2 cursor-pointer">

                        <Checkbox
                            checked={checked.includes(cat.id)}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                        {cat.content} ({cat.quantity})

                    </div>
                ))}
            </div>
        )
    }

    const renderColorList = () => {
        return (
            <div className='flex '>
                {arrColor.map((color) => {
                    const { id, name } = color;
                    return (
                        <div onClick={() => handleCheckColor(id)} className="p-2 cursor-pointer">
                            <Checkbox
                                checkedColor={checkedColor.includes(id)}
                                sx={{
                                    color: name[800],
                                    '&.Mui-checked': {
                                        color: name[600] || name,
                                    },
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderProductList = () => {
        return (
            <div className='flex flex-wrap'>
                {arrProduct.map((pro) => (
                    <div className='w-1/4'>
                        <ProductCard item={pro} />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <Container>
            <div className="flex justify-between items-end border-b-2 mb-4">
                <Box className="flex">
                    {renderTitleFilter()}
                </Box>
                <div onClick={() => setIsDrawerOpen(true)} className='border-2 p-2  mb-1 cursor-pointer'>
                    <span className='mr-2'>Lọc & Sắp xếp</span>
                    <TuneIcon />
                </div>
                <Drawer open={isDraweOpen} onClose={() => setIsDrawerOpen(false)} anchor="right">
                    <Box className='w-96'>
                        <Typography variant='h6' component='div' >
                            <div className='text-lg flex justify-between items-center p-4 cursor-pointer border-b'>
                                <div>Lọc và Sắp xếp</div>
                                <div>
                                    <span className="underline text-neutral-500 hover:bg-black hover:text-zinc-50">Clear all</span>
                                    <CloseIcon className="ml-2" onClick={() => setIsDrawerOpen(false)} />
                                </div>
                            </div>
                        </Typography >
                        <ItemDrawer title='Sort By' renderFuntion={renderTitleSortBy} />
                        <ItemDrawer title='Kích cỡ' renderFuntion={renderSizeList} />
                        <ItemDrawer title='Loại Sản Phẩm' renderFuntion={renderCatProductList} />
                        <ItemDrawer title='MÀU' renderFuntion={renderColorList} />
                    </Box >
                </Drawer >
            </div>
            {renderProductList()}
        </Container >
    )
}
