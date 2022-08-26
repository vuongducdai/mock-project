import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import React, { useRef } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductList } from "../../redux/admin/productSlice";
import Image from "next/image";
import Link from "next/link";

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

const ProductCard = ({ id, img, name, price, className }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={className + " flex cursor-pointer"}>
        <div className="pr-1">
          <Image src={img} alt={name} width={90} height={90} layout="fixed" />
        </div>
        <div className="text-ellipsis">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

const ProductColumn = ({ productList }) => {
  const productListJSX = productList
    .slice(0, 4)
    .map((item, index) => (
      <ProductCard
        id={item.id}
        key={item.name + index}
        img={item.img}
        name={item.name}
        price={item.price}
        className="m-[5px]"
      />
    ));
  return (
    <div className="flex flex-col p-[5px]">
      <p className="font-bold">SẢN PHẨM</p>
      {productListJSX}
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
  const [searchTerm, setSearchTerm] = useState("");
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const { products } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    //Debounce when typing
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setSearchTerm(e.target.value);
      dispatch(getProductList());
      if (searchResult !== null) {
        setOpenSearchResult(true);
      }
    }, 500);
  };

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  useEffect(() => {
    let result = [];
    if (products.products !== undefined) {
      result = products.products.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      });

      if (searchTerm === "" || result.length === 0) {
        setOpenSearchResult(false);
      } else {
        setSearchResult(result);
      }
    }
  }, [searchTerm, products]);

  return (
    <div className="relative">
      <SearchField onChange={handleChange}> </SearchField>
      {openSearchResult && <SearchResult productList={searchResult} />}
    </div>
  );
}
