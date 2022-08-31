import { Container } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/pagination";


export default function PaginationData({ totalProduct, handlePagination }) {
    const totalPage = Math.ceil(totalProduct / 10);

    const [page, setPage] = useState(1);

    const handleChangePage = (event, value) => {
        setPage(value);
        handlePagination(value);
    };
    return (
        <Container >
            <div className=' mb-4 flex flex-row justify-center'>
                <div className="flex justify-between items-center">
                    <div className='w-26 mx-4'>
                        <Stack>
                            <Pagination page={page} onChange={handleChangePage} count={totalPage} variant="outlined" color="secondary" />
                        </Stack>
                    </div>
                </div>
            </div>
        </Container>
    )
}
