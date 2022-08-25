import ShortcutIcon from "@mui/icons-material/Shortcut";
import { Button } from "@mui/material";
import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const BlackButton = ({ title, className }) => {
  const beforeAfterButtonStyle = `relative bg-black text-white p-4 before:w-[100%] before:h-[3px] before:absolute before:-bottom-[3px] before:left-[3px] before:border-b before:border-l before:border-black after:h-[100%] after:w-[3px] after:absolute after:top-[3px] after:-right-[3px] after:border-t after:border-r after:border-black hover:text-slate-500	 duration-200 ${[
    className,
  ]}`;
  return (
    <button className={beforeAfterButtonStyle}>
      <div className="flex justify-between w-[100%]">
        <span>{title}</span>
        <span>
          <TrendingFlatIcon className="w-[100%]" />
        </span>
      </div>
    </button>
  );
};

export default BlackButton;
