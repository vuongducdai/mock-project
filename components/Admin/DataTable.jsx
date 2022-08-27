import * as React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import { FormControl, InputAdornment } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";

export default function DataTable({
  type,
  name,
  image,
  price,
  color,
  size,
  datas,
}) {

  const render = () => {
    return (
      <TableContainer
        component={Paper}
        className="grid justify-items-center rounded-lg px-10"
      >
        <div className="grid grid-cols-8 w-full pb-2 pt-8">
          <div className="text-2xl">
            <h1>{type}</h1>
          </div>
          <div className="col-start-4 col-end-8">
            <FormControl className="w-full">
              <OutlinedInput
                className="rounded-full bg-fb h-8"
                placeholder="Search..."
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="col-start-8 col-end-9 rounded-md border-2 border-solid bg-blue-dark grid place-items-center cursor-pointer hover:bg-blue-dark-hover text-white">
            Filter
          </div>
        </div>
        <Table className="w-full" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="border-b-2">
              <TableCell className="text-slate-400">{name}</TableCell>
              <TableCell className="text-slate-400" align="center">
                {image}
              </TableCell>
              <TableCell className="text-slate-400" align="center">
                {price}
              </TableCell>
              <TableCell className="text-slate-400" align="center">
                {color}
              </TableCell>
              <TableCell className="text-slate-400" align="center">
                {size}
              </TableCell>
              <TableCell className="text-slate-400" align="center">
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderTop: "none", height: 300 }}>
            {datas?.map((data) => (
              <TableRow
                className="last:border-b-2"
                key={data.id}
                sx={{ "td, th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell align="center">
                  <Image
                    src={data.img}
                    layout="fixed"
                    width={50}
                    height={50}
                    className="rounded-lg"
                    alt={data.name}
                  />
                </TableCell>
                <TableCell align="center">{data?.color}</TableCell>
                <TableCell align="center">{data?.size}</TableCell>
                <TableCell align="center">{data?.price}</TableCell>
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
