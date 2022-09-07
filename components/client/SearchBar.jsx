import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { BASE_URL, fetcher } from "../../api/requestMethod";
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
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocus, setIsFocus] = useState(true);

  const { data: products } = useSWR(`${BASE_URL}/product`, fetcher, {
    dedupingInterval: 15000,
  });

  const handleSubmitSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setTimeout(4000);
    setIsFocus(false);
  };

  const handleClick = () => {
    setIsFocus(true);
  };

  useEffect(() => {
    let result = [];
    if (products !== undefined) {
      result = products.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      });

      if (searchTerm === "" || result.length === 0) {
        setOpenSearchResult(false);
      } else if (result.length !== 0) {
        setOpenSearchResult(true);
        setSearchResult(result.slice(0, 4));
      }
    }
  }, [searchTerm, products]);

  return (
    <Box position="relative" onClick={handleClick}>
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

const DrawerHeader = styled("div")(({ theme }) => ({
  backgroundColor: "#eceff1",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const SearchFieldMobile = ({ onSubmitSearch }) => {
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
    <Box width="100%">
      <InputBase
        sx={{ ml: 1, flex: 1, width: "80%" }}
        placeholder="Tìm kiếm"
        inputProps={{ "aria-label": "search" }}
        // value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </Box>
  );
};

const SearchResultMobile = ({ productList, toggleDrawer }) => {
  return (
    <Stack
      zIndex={1200}
      width="650px"
      right="0"
      px="30px"
      py="20px"
      className="drop-shadow-xl"
    >
      <Box>
        <ProductColumn
          productList={productList}
          mobile="true"
          toggleDrawer={toggleDrawer}
        />
      </Box>
    </Stack>
  );
};

export function SearchBarMobile() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const drawerWidth = "100%";
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const { data: products } = useSWR(`${BASE_URL}/product`, fetcher, {
    dedupingInterval: 15000,
  });

  const handleSubmitSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  useEffect(() => {
    let result = [];
    if (products !== undefined) {
      result = products.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      });

      if (result.length !== 0) {
        setSearchResult(result.slice(0, 4));
      }

      if (searchTerm === "") {
        setSearchResult([]);
      } else if (result.length !== 0) {
        setSearchResult(result.slice(0, 4));
      }
    }
    console.log(searchTerm, products);
  }, [searchTerm, products]);

  return (
    <Box position="relative">
      <Stack
        width={48}
        height={48}
        align="center"
        justifyContent="center"
        alignItems="center"
        className="cursor-pointer"
      >
        <Box>
          <SearchIcon color="primary" onClick={handleDrawerOpen} />;
        </Box>
      </Stack>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <SearchFieldMobile onSubmitSearch={handleSubmitSearch} />
        </DrawerHeader>
        <SearchResultMobile
          productList={searchResult}
          toggleDrawer={toggleDrawer}
        />
      </Drawer>
    </Box>
  );
}
