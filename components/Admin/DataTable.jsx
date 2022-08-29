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
import Image from "next/image";
import Search from "./Search";

const DataTable = ({ type, datas }) => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(datas);
  const [searchData, setSearchData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [columnsToHide, setColumnsToHide] = useState(["id", "createdAt"]);

  useEffect(() => {
    mapDynamicColumns();

    // const filter = (objs) => {
    //   if (query) {
    //     return objs.filter(obj => {
    //       return obj.name.includes(query)
    //     })
    //   }
    //   return objs
    // }

    const result =datas.filter((item) => {
      // return item.name.toLowerCase().includes(query)
      const arrayResult = Object.values(item).map((x) => {
        // console.log(x, x.toString().toLowerCase().includes(query))
        return x.toString().toLowerCase().includes(query);
      });
      // console.log(arrayResult, )

      if (arrayResult.includes(true)) return true;
      else return false;
    });
    setSearchResult(result);
  }, [datas, query]);
  // Format Table Rows

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

  const isImg = (item) => {
    return item.includes("http://") ? (
      <Image src={item} width={40} height={40} />
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
        // search data

        filterDeepUndeFinedValues(cells);
      }
    });
    return filterDeepUndeFinedValues(cells).map((cell, index) => {
      return <TableCell key={index}>{cell}</TableCell>;
    });
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

  const handleSearch = (e) => {
    setQuery(e);

  };

  return (
    <TableContainer
      component={Paper}
      className="grid justify-items-center rounded-lg px-10"
    >
      <div className="grid grid-cols-8 w-full pb-2 pt-8">
        <div className="text-2xl">
          <Button
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
          {datas && createTableRows(searchResult)}
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
