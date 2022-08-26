import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Search from "./Search";

export default function UserTable({
  name,
  email,
  address,
  phone,
  isAdmin,
  datas,
  type,
}) {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleSearch = (e) => {
    setQuery(e);
    if (query !== "") {
      const filterData = datas.filter((value) => {
        return (
          value.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
          value.address.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || 
          value.phone.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || 
          value.email.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
      });
      setSearchData(filterData);
    } else {
      setSearchData(datas);
    }
    return searchData;
  };
  const conditionalRender = () => {
    return query.length > 1 ? searchData : datas;
  };
  const render = () => {
    return (
      <TableContainer
        component={Paper}
        className="grid justify-items-center rounded-lg px-10"
      >
        <div className="grid grid-cols-8 w-full pb-2 pt-8">
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
          <div className="col-start-4 col-end-8">
            <Search search={handleSearch} />
          </div>
          {/* <div className="col-start-8 col-end-9 rounded-md border-2 border-solid bg-blue-dark grid place-items-center cursor-pointer hover:bg-blue-dark-hover text-white">
            Filter
          </div> */}
        </div>
        <Table className="w-full" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="border-b-2">
              <TableCell className="text-slate-400">{name}</TableCell>
              <TableCell className="text-slate-400" align="center">
                {email}
              </TableCell>
              <TableCell className="text-slate-400" align="center">
                {address}
              </TableCell>
              <TableCell className="text-slate-400" align="center">
                {phone}
              </TableCell>
              <TableCell className="text-slate-400" align="center">
                {isAdmin}
              </TableCell>
              <TableCell className="text-slate-400" align="center">
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderTop: "none", height: 300 }}>
            {conditionalRender().map((data) => (
              <TableRow
                className="last:border-b-2"
                key={data.id}
                sx={{ "td, th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell align="center">{data.email}</TableCell>
                <TableCell align="center">{data.address}</TableCell>
                <TableCell align="center">{data.phone}</TableCell>
                <TableCell align="center">
                  {data.isAdmin === true ? "Admin" : "User"}
                </TableCell>
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
            ))}
          </TableBody>
        </Table>
        <div>
          <h1>Pagination</h1>
        </div>
      </TableContainer>
    );
  };

  return <>{render()}</>;
}
