import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import React from 'react';

const BlackButton = ({ title, className, onClick, isLoading = false }) => {
	const beforeAfterButtonStyle = `relative bg-black text-white p-4 before:w-[100%] before:h-[3px] before:absolute before:-bottom-[3px] before:left-[3px] before:border-b before:border-l before:border-black after:h-[100%] after:w-[3px] after:absolute after:top-[3px] after:-right-[3px] after:border-t after:border-r after:border-black hover:text-slate-500 duration-200 ${[
		className,
	]} ${isLoading ? 'disabled' : ''}`;

	return (
		<>
			{!isLoading ? (
				<button
					className={beforeAfterButtonStyle}
					onClick={() => onClick()}>
					<div className='flex justify-between w-[100%]'>
						<span>{title}</span>
						<span>
							<TrendingFlatIcon className='w-[100%]' />
						</span>
					</div>
				</button>
			) : (
				<button
					type='button'
					className={`inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 transition ease-in-out shadow cursor-not-allowed relative bg-black text-white p-4 before:w-[100%] before:h-[3px] before:absolute before:-bottom-[3px] before:left-[3px] before:border-b before:border-l before:border-black after:h-[100%] after:w-[3px] after:absolute after:top-[3px] after:-right-[3px] after:border-t after:border-r after:border-black hover:text-slate-500	 duration-200 ${[
						className,
					]}`}>
					<svg
						className='w-5 h-5 mr-3 -ml-1 text-white animate-spin'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'>
						<circle
							className='opacity-25'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'></circle>
						<path
							className='opacity-75'
							fill='currentColor'
							d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
					</svg>
					ĐANG THÊM ...
				</button>
			)}
		</>
	);
};

export default BlackButton;
