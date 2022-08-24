import ShortcutIcon from '@mui/icons-material/Shortcut';
import { Button } from '@mui/material';
import React from 'react';

const BlackButton = ({
	title,
	endIcon = <ShortcutIcon fontSize='inherit' />,
	className,
}) => {
	return (
		<Button
			className={`relative w-full uppercase transition-color ease duration-200 flex justify-between px-3 hover:text-slate-400 hover:bg-black h-[50px] bg-black text-white rounded-none before:absolute
			before:z-[-10]
			before:block
			before:w-full before:h-full
			before:bg-transparent
			before:top-1 before:left-1 before:border-2 before:border-solid before:border-black ${[
				className,
			]}`}
			endIcon={endIcon}>
			{title}
		</Button>
	);
};

export default BlackButton;
