import { Container } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationData({ totalProduct, handlePagination }) {
    const [age, setAge] = React.useState(1);
    const totalPage = Math.ceil(totalProduct / 10);


    const handleChange = (event) => {
        setAge(event.target.value);
        onPagination(event.target.value)
    };

    const onPagination = (age) => {
        handlePagination(age);
    }

    const renderItemPage = () => {
        const list = []
        for (let i = 1; i <= totalPage; i++) {
            list.push(<MenuItem key={i} className='text-center' value={i}>{i}</MenuItem>)
        }
        return list
    }
    const [page, setPage] = useState(1);
    const handleChangePage = (event, value) => {
        setPage(value);
        onPagination(value)
    };
    return (
        <Container >
            <div className=' mb-4 flex flex-row justify-center'>
                {/* <div
                    className="h-6 underline hover:bg-black hover:text-zinc-50 hover:no-underline">
                    PREVIOUS
                </div> */}
                <div className="flex justify-between items-center">
                    {/* <span>Page</span> */}
                    <div className='w-26 mx-4'>
                        {/* <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Page</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                className='text-center'
                            >
                                {renderItemPage()}
                            </Select>
                        </FormControl> */}
                        <Stack>
                            <Pagination page={page} onChange={handleChangePage} count={totalPage} variant="outlined" color="secondary" />
                        </Stack>
                    </div>
                    {/* <span>of {totalPage}</span> */}
                </div>
                {/* <div
                    className="h-6 underline hover:bg-black hover:text-zinc-50 hover:no-underline">
                    NEXT
                </div> */}
            </div>
        </Container>
    )
}
