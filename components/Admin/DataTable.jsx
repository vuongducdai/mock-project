import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button'
import Image from 'next/image';





function createData(name, image, price, color, size,id) {
  return { name, image, price, color, size,id };
}

const rows = [
  createData('Frozen yoghurt', 'https://picsum.photos/200/300', 6.0, 24, 4.0),
  createData('Ice cream sandwich', 'https://picsum.photos/200/300', 9.0, 37, 4.3),
  createData('Eclair', 'https://picsum.photos/200/300', 16.0, 24, 6.0),
  createData('Cupcake', 'https://picsum.photos/200/300', 3.7, 67, 4.3),
  createData('Gingerbread', 'https://picsum.photos/200/300', 16.0, 49, 3.9),
  createData('Gingerbread', 'https://picsum.photos/200/300', 16.0, 49, 3.9),
];
console.log(rows)
export default function DataTable({product,name, image, price, color, size}) {
  return (
    <TableContainer component={Paper} className='grid justify-items-center rounded-lg'>
      <div>
        <h1>{product}</h1>
      </div>
      <Table sx={{ maxWidth: 1000 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className='border-b-2'>
            <TableCell className='text-slate-400'>{name}</TableCell>
            <TableCell className='text-slate-400' align="center">{image}</TableCell>
            <TableCell  className='text-slate-400' align="center">{price}</TableCell>
            <TableCell  className='text-slate-400' align="center">{color}</TableCell>
            <TableCell  className='text-slate-400' align="center">{size}</TableCell>
            <TableCell  className='text-slate-400' align="center">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{borderTop:'none',height:300}}>
          {rows.map((row) => (
            <TableRow
              className='last:border-b-2'
              key={row.id}
              sx={{ 'td, th':{border:0} }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">
                <Image src={row.image} layout='fixed' width={50} height={50} className='rounded-lg'/>
              </TableCell>
              <TableCell align="center">{row.color}</TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align='center'>
                <Button variant='contained' sx={{color:'success.main','&:hover':{color:'white',background:'green'}}}>Edit</Button>
                <Button variant='contained' sx={{color:'warning.main','&:hover':{color:'white',background:'red'}}}>Delete</Button>
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <h1>Pagination</h1>
      </div>
    </TableContainer>
  );
}
