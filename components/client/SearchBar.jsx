import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../redux/admin/productSlice";
import { ProductColumn } from "./ProductColumn";

export const SearchField = ({ onSubmitSearch, onFocus, onBlur }) => {
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;

    //Debounce
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      onSubmitSearch(value);
    }, 500);
  };

  return (
    <Box className="py-[8px] pl-[36px] w-[15vw]">
      <Box className="border border-transparent hover:border-black duration-1000 bg-[#eceff1] h-[32px] flex">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          // value={searchTerm}
          onChange={handleSearchTermChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <IconButton className="text-black text-center">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const SuggestionColumn = () => {
  return (
    <Stack p={"5px"} height={"100%"}>
      <Typography variant="h6">SUGGESTIONS</Typography>
      <Typography>KHÔNG CÓ ĐỀ XUẤT</Typography>
    </Stack>
  );
};

const SearchResult = ({ productList }) => {
  return (
    <Stack
      zIndex={1200}
      position="absolute"
      direction="row"
      bgcolor="white"
      width="650px"
      right="0"
      px="30px"
      py="20px"
      className="drop-shadow-xl"
    >
      <Box flexBasis={0} flexGrow={1}>
        <SuggestionColumn />
      </Box>
      <Box flexBasis={0} flexGrow={1}>
        <ProductColumn productList={productList} />
      </Box>
    </Stack>
  );
};

export default function SearchBar() {
  const { products } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const [openSearchResult, setOpenSearchResult] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocus, setIsFocus] = useState(true);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const handleSubmitSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    let result = [];
    if (products.products !== undefined) {
      result = products.products.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      });

      if (searchTerm === "" || result.length === 0) {
        setOpenSearchResult(false);
      } else if (result.length !== 0) {
        setOpenSearchResult(true);
        setSearchResult(result);
      }
    }
  }, [searchTerm, products]);

  return (
    <Box position="relative">
      <SearchField
        onSubmitSearch={handleSubmitSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocus && openSearchResult && (
        <SearchResult productList={searchResult} />
      )}
    </Box>
  );
}
