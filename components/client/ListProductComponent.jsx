import CloseIcon from '@mui/icons-material/Close';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Container, Drawer, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import { useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import "swiper/css";
import "swiper/css/pagination";
import { arrCatProduct, arrColor, arrSize, arrTitleFilter, arrTitleSortBy, sizesArr } from '../../constants/data';
import ProductCard from '../ProductCard';
import ItemDrawer from './ItemDrawer';



export default function ListProductComponent({ arrProduct }) {
    const [result, setResult] = useState();

    const [titleActive, setTitleActive] = useState(1);
    const [isDraweOpen, setIsDrawerOpen] = useState(false);
    const [sortByActive, setSortByActive] = useState(0);

    const [sizeActive, setSizeActive] = useState(0);
    const [checkedCat, setCheckedCat] = useState([]);
    const [checkedColor, setCheckedColor] = useState([]);

    const handleSetIsDrawerOpen = (bool) => {
        setIsDrawerOpen(bool);
    }

    const handleSortByPrice = (id) => {
        setSortByActive(id);
        if (result.length > 0) {
            if (id === 1) {
                setResult(result.sort((a, b) => {
                    return a.price - b.price
                }))
            }
            else {
                setResult(result.sort((a, b) => {
                    return b.price - a.price
                }))
            }
        }
        else {
            if (id === 1) {
                setResult([...arrProduct].sort((a, b) => {
                    return a.price - b.price
                }))
            }
            else {
                setResult([...arrProduct].sort((a, b) => {
                    return b.price - a.price
                }))
            }
        }
    }

    const handleCheckCat = (id) => {
        setCheckedCat(() => {
            const isChecked = checkedCat.includes(id);
            if (isChecked) {
                return checkedCat.filter(item => item !== id)
            }
            else {
                return [...checkedCat, id,]
            }
        })
    }

    const handleCheckColor = (id) => {
        setCheckedColor(() => {
            const isChecked = checkedColor.includes(id);
            if (isChecked) {
                return checkedColor.filter(item => item !== id)
            }
            else {
                return [...checkedColor, id,]
            }
        })
    }

    const handleFilterAll = () => {
        const final = arrProduct.filter((item) => {
            const booleanResult =
                (sizeActive !== 0 ? item.size === sizeActive : true)
                &&
                (checkedColor.length !== 0 ? checkedColor.includes(+item.color) : true)
                &&
                (checkedCat.length !== 0 ? checkedCat.includes(item.material.toString().toLowerCase()) : true)
            return (booleanResult)
        })
        console.log('final result', final);
        setResult(final)
    }

    useEffect(() => {
        handleFilterAll()
    }, [checkedCat, checkedColor, sizeActive]);

    useEffect(() => {
        setResult([...arrProduct]);
    }, [arrProduct])

    const renderTitleFilter = () => {
        return (
            arrTitleFilter.map((title) => (
                <span
                    onClick={() => setTitleActive(title.id)}
                    key={title.id}
                    className={`p-2 cursor-pointer text-neutral-500
                   ${titleActive === title.id
                            ? 'border-b-2 border-b-black text-black '
                            : ''}
                           hover:border-b-2 border-b-black`}>
                    {title.content}
                </span>
            ))
        )
    }

    const renderTitleSortByPrice = () => {
        return (
            arrTitleSortBy.map((sortBy) => (
                <div
                    key={sortBy.id}
                    onClick={() => (
                        handleSortByPrice(sortBy.id)
                    )}
                    className={`cursor-pointer
                   ${sortBy.isLast ? '' : 'border-b'} py-1.5
                   ${sortByActive === sortBy.id ? 'text-neutral-500 text-rose-600' : ''}
                   `}
                >
                    {sortBy.content}
                </div>
            ))
        )
    }

    const renderSizeList = () => {
        return (
            <div className='flex flex-wrap'>
                {sizesArr.map((size) => (
                    <div
                        onClick={() => setSizeActive(size.id)}
                        className={`${sizeActive === size.id
                            ? 'border-black'
                            : ''}
                           text-center py-4 w-28 border cursor-pointer hover:border-black`}
                        key={size.id} >
                        {size.size}
                    </div>
                ))}
            </div>
        )
    }

    const renderCatProductList = () => {
        return (
            <div className='flex flex-col'>
                {arrCatProduct.map((cat) => (
                    <div
                        key={cat.id}
                        onClick={() => {
                            handleCheckCat(cat.id);
                        }
                        }
                        className="p-2 cursor-pointer">
                        <Checkbox
                            checked={checkedCat.includes(cat.id)}
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
                        <div
                            key={id}
                            onClick={() => handleCheckColor(id)}
                            className="p-2 cursor-pointer">
                            <Checkbox
                                checked={checkedColor.includes(id)}
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
            <div className={`flex flex-wrap ${result?.length > 0 ? '' : 'justify-center'}`}>
                {result?.length > 0 ?
                    result?.map((pro) => (
                        <div key={pro.id} className='w-1/4'>
                            <ProductCard item={pro} />
                        </div>
                    )) : <div className='text-xl text-rose-600 my-8'>
                        Không có sản phẩm phù hợp
                    </div>
                }
            </div>
        )
    }

    const handleClearAll = () => {
        setResult(arrProduct);
        setSortByActive(0);
        setSizeActive(0);
        setCheckedColor([]);
        setCheckedCat([]);
        setIsDrawerOpen(false);
    }

    return (
        <Container>
            <div
                className="flex justify-between items-end border-b-2 mb-4">
                <Box className="flex">
                    {renderTitleFilter()}
                </Box>
                <div
                    onClick={() => handleSetIsDrawerOpen(true)}
                    className='border-2 p-2  mb-1 cursor-pointer'>
                    <span className='mr-2'>Lọc & Sắp xếp</span>
                    <TuneIcon />
                </div>
                <Drawer
                    className='z-[1201]'
                    open={isDraweOpen}
                    onClose={() => handleSetIsDrawerOpen(false)}
                    anchor="right">
                    <Box className='w-96'>
                        <Typography variant='h6' component='div' >
                            <div
                                className='text-lg flex justify-between items-center p-4 cursor-pointer border-b'>
                                <div>Lọc và Sắp xếp</div>
                                <div>
                                    <span
                                        onClick={handleClearAll}
                                        className="underline text-neutral-500 hover:bg-black hover:text-zinc-50">
                                        Clear all
                                    </span>
                                    <CloseIcon className="ml-2" onClick={() => handleSetIsDrawerOpen(false)} />
                                </div>
                            </div>
                        </Typography >
                        <ItemDrawer title='Sort By' renderFuntion={renderTitleSortByPrice} />
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
