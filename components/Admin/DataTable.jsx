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





function createData(name, image, price, color, size,id) {
  return { name, image, price, color, size,id };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
console.log(rows)
export default function DataTable({product,name, image, price, color, size}) {
  return (
    <TableContainer component={Paper} className='grid justify-items-center rounded-lg bg-slate-50'>
      <div>
        <h1>{product}</h1>
      </div>
      <Table sx={{ maxWidth: 1000 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className='text-slate-200'>
            <TableCell className='bg-red-300'>{name}</TableCell>
            <TableCell  align="center">{image}</TableCell>
            <TableCell  align="center">{price}</TableCell>
            <TableCell  align="center">{color}</TableCell>
            <TableCell  align="center">{size}</TableCell>
            <TableCell  align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{borderTop:'none',height:300}}>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { borderBottom: 1 },'td, th':{border:0} }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.image}</TableCell>
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
