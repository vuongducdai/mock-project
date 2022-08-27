import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
    <div className="py-[8px] pl-[36px] w-[15vw]">
      <div className="border border-transparent hover:border-black duration-1000 bg-[#eceff1] h-[32px] flex">
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
      </div>
    </div>
  );
};

const SuggestionColumn = () => {
  return (
    <div className="p-[5px]">
      <p>SUGGESSTIONS</p>
      <p>KHÔNG CÓ ĐỀ XUẤT</p>
    </div>
  );
};

const SearchResult = ({ productList }) => {
  return (
    <div className="z-[1200] absolute flex bg-white w-[650px] right-0 px-[30px] py-[20px] drop-shadow-xl">
      <div className="basis-0 grow">
        <SuggestionColumn />
      </div>
      <div className="basis-0 grow">
        <ProductColumn productList={productList} />
      </div>
    </div>
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
    <div className="relative">
      <SearchField
        onSubmitSearch={handleSubmitSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocus && openSearchResult && (
        <SearchResult productList={searchResult} />
      )}
    </div>
  );
}
