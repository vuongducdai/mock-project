import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const SearchField = ({ onChange }) => {
  return (
    <div className="py-[8px] pl-[36px] w-[15vw]">
      <div className="border border-transparent hover:border-black duration-1000 bg-[#eceff1] h-[32px] flex">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          onChange={onChange}
        />
        <IconButton className="text-black text-center">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default function SearchBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <SearchField onChange={handleChange} />
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
