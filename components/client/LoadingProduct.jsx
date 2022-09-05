import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[500px]">
      <CircularProgress />
    </div>
  );
};

export default LoadingPage;
