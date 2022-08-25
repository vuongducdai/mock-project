import { Container } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Head from "next/head";
import React from 'react';
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/client/Header";
import ListProductComponent from "../components/ListProductComponent";
import Slider from '../components/Slider';


export default function Pagination() {
    const [age, setAge] = React.useState(1);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container className='flex justify-between'>
            <div className="h-6 underline hover:bg-black hover:text-zinc-50 hover:no-underline">PREVIOUS</div>
            <div className="flex justify-between items-center">
                <span>Page</span>
                <div className='w-26 mx-4'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Page</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            className='text-center'
                        >
                            <MenuItem className='text-center' value={1}>1</MenuItem>
                            <MenuItem className='text-center' value={2}>2</MenuItem>
                            <MenuItem className='text-center' value={3}>3</MenuItem>
                            <MenuItem className='text-center' value={4}>99</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <span>of 2</span>
            </div>
            <div className="h-6 underline hover:bg-black hover:text-zinc-50 hover:no-underline">NEXT</div>
        </Container>
    )
}
