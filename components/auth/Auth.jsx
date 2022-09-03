import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import LoadingPage from "../client/LoadingProduct";

export const Auth = ({ children }) => {
  const { user } = useSelector((state) => state.userSlice);
  const router = useRouter();
  console.log(user);
  if (user !== null) {
    router.push("/");
    return <LoadingPage />;
  }

  return <Box>{children}</Box>;
};
