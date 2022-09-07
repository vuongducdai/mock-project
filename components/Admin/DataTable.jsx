import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Search from './Search';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import ReactFacebookLogin from 'react-facebook-login';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import {
  clearFormData,
  openToolbar,
  setAdd,
  setEdit,
  setFormData,
} from '../../redux/admin/toolbarSlice';
import { deleteOneProduct } from '../../redux/admin/productSlice';
import { deleteOneUser } from '../../redux/admin/userSlice';

const DataTable = ({ type, datas }) => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(datas);
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [columnsToHide, setColumnsToHide] = useState([
    '_id',
    'createdAt',
    '__v',
    'updatedAt',
    'password',
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    mapDynamicColumns();

    const result = datas.filter((item) => {
      // return item.name.toLowerCase().includes(query)
      const arrayResult = Object.values(item).map((x) => {
        // console.log(x, x.toString().toLowerCase().includes(query))
        return x.toString().toLowerCase().includes(query);
      });

      if (arrayResult.includes(true)) return true;
      else return false;
    });
    setSearchResult(result);
  }, [datas, query]);

  const handleAdd = () => {
    dispatch(clearFormData());
    dispatch(setAdd());
    dispatch(openToolbar());
  };

  const handleEdit = (obj) => {
    dispatch(setEdit());
    dispatch(setFormData(obj));
    dispatch(openToolbar());
  };

  const handleOpenModal = (id) => {
    setCurrentId(id);
    setOpenModal(true);
  };

  const handleDelete = () => {
    if (type === 'product') {
      dispatch(deleteOneProduct(currentId));
    } else {
      dispatch(deleteOneUser(currentId));
    }
  };
  // create dynamic columns from import data:
  const mapDynamicColumns = () => {
    let dynamicCol = [];
    datas?.forEach((result) => {
      Object.keys(result).forEach((col) => {
        if (!dynamicCol.includes(col)) {
          dynamicCol.push(col);
        }
      });
    });

    setColumns(dynamicCol);
  };

  // create dynamic table
  const createTableRows = (objs) => {
    return objs?.map((obj) => {
      return (
        <TableRow
          className="last:border-b-2"
          key={obj._id}
          sx={{ 'td, th': { border: 0 } }}
        >
          {addTableRow(obj)}
          <TableCell
            align="center"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              onClick={() => handleEdit(obj)}
              variant="contained"
              sx={{
                color: 'success.main',
                background: 'white',
                '&:hover': { color: 'white', background: 'green' },
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleOpenModal(obj._id)}
              variant="contained"
              sx={{
                color: 'warning.main',
                background: 'white',
                '&:hover': { color: 'white', background: 'red' },
              }}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };

  const isImg = (item) => {
    return item.includes('data') ? (
      <Image key={item} alt="img" src={item} width={40} height={40} />
    ) : (
      item
    );
  };

  // create dynamic row from import data
  const addTableRow = (obj) => {
    let cells = [];

    columns?.forEach((col) => {
      if (!columnsToHide.includes(col)) {
        cells.push(
          Object.keys(obj).map((item) => {
            if (obj[item] !== undefined && item === col) {
              return isImg(obj[item].toString());
            }
          })
        );

        filterDeepUndeFinedValues(cells);
      }
    });
    return filterDeepUndeFinedValues(cells).map((cell, index) => {
      return (
        <TableCell align="center" key={index}>
          {cell}
        </TableCell>
      );
    });
  };

  // create a deep filter function to find value
  const filterDeepUndeFinedValues = (arr) => {
    return arr
      .map((val) => val.map((deepVal) => deepVal).filter((deepVal) => deepVal))
      .map((val) => {
        if (val.length < 1) {
          val = ['-'];
          return val;
        }
        return val;
      });
  };
  // Mapping table columns
  const mapTableColumns = () => {
    return columns.map((col, index) => {
      if (!columnsToHide.includes(col)) {
        return (
          <TableCell key={index} className="text-slate-400" align="center">
            {col.toUpperCase()}
          </TableCell>
        );
      }
    });
  };

  const handleSearch = (e) => {
    setQuery(e);
  };

  // PAGINATION FUNCTIONS
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - createTableRows(datas).length)
      : 0;

  return (
    <Box>
      <TableContainer
        component={Paper}
        className="grid justify-items-center rounded-lg px-10"
      >
        <div className="grid grid-cols-8 w-full pb-2 pt-8">
          <div className="text-2xl">
            <Button
              onClick={handleAdd}
              variant="contained"
              sx={{
                color: 'success.main',
                background: 'white',

                '&:hover': { color: 'white', background: 'green' },
              }}
            >
              {`Add ${type}`}
            </Button>
          </div>
          <div className="col-start-4 col-end-8">
            <Search search={handleSearch} />
          </div>
        </div>
        <Table className="w-full" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="border-b-2">
              {datas && mapTableColumns()}
              <TableCell className="text-slate-400" align="center">
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderTop: 'none', minHeight: 100 }}>
            {datas &&
              createTableRows(searchResult).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* {datas.length ? createTable(datas) : null} */}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={createTableRows(datas).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {openModal && (
        <div className="inset-0 bg-modal z-20 flex-center fixed ">
          <div className="h-40 bg-white w-86 px-4 py-6 rounded-lg scale-up-center">
            <h3 className="text-xl font-base">
              Are you sure to delete this item?
            </h3>
            <div className="flex items-center justify-between py-4 w-full mt-6">
              <button
                className="px-8 py-2 border-none rounded-md bg-green-500 text-white w-24"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="px-8 py-2 border-none rounded-md bg-red-500 text-white w-24"
                onClick={() => setOpenModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default DataTable;
