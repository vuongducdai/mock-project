import { FormControl, InputAdornment } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';

import Button from '@mui/material/Button';
const Search = ({ search }) => {
  return (
    <>
      <FormControl className="w-full">
        <OutlinedInput
          className="rounded-full bg-fb h-8"
          placeholder="Search..."
          onChange={(e) => search(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export default Search;
