import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { clearFormData, openToolbar, setAdd, setEdit, setFormData } from "../../redux/admin/toolbarSlice";
import { deleteOneProduct } from "../../redux/admin/productSlice";
import { deleteOneUser } from "../../redux/admin/userSlice";

const DataTable = ({ type, datas }) => {
      const [query, setQuery] = useState("");
      const [searchData, setSearchData] = useState([]);
      const [columns, setColumns] = useState([]);
      const [columnsToHide, setColumnsToHide] = useState(["id", "createdAt", 'img', 'updatedAt', '__v', 'password', '_id']);
      const dispatch = useDispatch();

      useEffect(() => {
            mapDynamicColumns();
      }, [datas]);

      const handleAdd = () => {
            dispatch(openToolbar());
            dispatch(setAdd());
            dispatch(clearFormData());
      }

      const handleEdit = (obj) => {
            dispatch(setFormData(obj))
            dispatch(openToolbar());
            dispatch(setEdit());
      }

      const handleDelete = (id) => {
            type === 'product'
                  ? dispatch(deleteOneProduct(id))
                  : dispatch(deleteOneUser(id))
      }

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
            return objs?.map((obj, index) => {
                  return (
                        <TableRow
                              className="last:border-b-2"
                              key={index}
                              sx={{ "td, th": { border: 0 } }}
                        >
                              {addTableRow(obj)}
                              <TableCell
                                    align="center"
                                    sx={{ display: "flex", justifyContent: "center" }}
                              >
                                    <Button
                                          onClick={() => handleEdit(obj)}
                                          variant="contained"
                                          sx={{
                                                color: "success.main",
                                                background: "white",

                                                "&:hover": { color: "white", background: "green" },
                                          }}
                                    >
                                          Edit
                                    </Button>
                                    <Button
                                          onClick={() => handleDelete(obj._id)}
                                          variant="contained"
                                          sx={{
                                                color: "warning.main",
                                                background: "white",
                                                "&:hover": { color: "white", background: "red" },
                                          }}
                                    >
                                          Delete
                                    </Button>
                              </TableCell>
                        </TableRow>
                  );
            });
      };

      // create dynamic row from import data
      const addTableRow = (obj) => {
            let cells = [];

            columns?.forEach((col) => {
                  if (!columnsToHide.includes(col)) {
                        cells.push(
                              Object.keys(obj).map((item) => {
                                    if (obj[item] && item === col) {

                                          return obj[item];
                                    } else if (item === col) {
                                          return "no value";
                                    }
                              })
                        );

                        filterDeepUndeFinedValues(cells);
                  }

            });
            return filterDeepUndeFinedValues(cells).map((cell, index) => {
                  return <TableCell key={index}>{cell}</TableCell>;
            });
      };

      // handle search in cells
      const deepSearch = (arr) => {
            return query ? arr.map((val) => val.filter((x) => x === query)) : arr;
      };

      // create a deep filter function to find value
      const filterDeepUndeFinedValues = (arr) => {
            return arr
                  .map((val) => val.map((deepVal) => deepVal).filter((deepVal) => deepVal))
                  .map((val) => {
                        if (val.length < 1) {
                              val = ["-"];
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

      const filterRow = (arr) => {
            if (query) {
                  return arr.filter((item) => item === query);
            } else {
                  return arr;
            }
      };

      const handleSearch = (e) => {
            setQuery(e);

            // if (!query) {
            //   const filterData = datas.filter((data) => {
            //     // const arr = Object.keys(data).filter(
            //     //   (key) => key !== "createdAt" && key !== "id"
            //     // );

            //     return data.name.toLowerCase().includes(query.toLocaleLowerCase());
            //   });
            //   return filterData;
            // } else {
            //   return datas;
            // }
      };

      const conditionalRender = () => {
            return query.length > 1 ? searchData : datas;
      };

      return (
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
                                          color: "success.main",
                                          background: "white",
                                          "&:hover": { color: "white", background: "green" },
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
                        <TableBody sx={{ borderTop: "none", height: 300 }}>
                              {datas && createTableRows(datas)}
                        </TableBody>
                  </Table>

                  {/* {datas.length ? createTable(datas) : null} */}
                  <div>
                        <h1>Pagination</h1>
                  </div>
            </TableContainer>
      );
};

export default DataTable;
